import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@/services/api";
import Header from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
import { PlusCircle } from "lucide-react";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"animal" | "staff">("animal");
    const navigate = useNavigate();

    interface Animal {
        id: string;
        species: string;
        gender: string;
        isChild: boolean;
        age: number;
        weight: number;
        createdAt: string;
        updatedAt: string;
    }

    interface Staff {
        id: string;
        name: string;
        role: string;
        age: number;
        joinedAt: string;
    }

    const [animals, setAnimals] = useState<Animal[]>([]);
    const [staff, setStaff] = useState<Staff[]>([]);

    // Fetch Animals
    useEffect(() => {
        const fetchAnimals = async () => {
            try {
                const response = await api.get("/animal/get", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                    withCredentials: true,
                });
                if (response.status === 200 || response.status === 201) {
                    setAnimals(response.data);
                    setIsLoading(false);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchAnimals();
    }, []);

    // Fetch Staff
    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await api.get("/staff/get", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                    withCredentials: true,
                });
                if (response.status === 200 || response.status === 201) {
                    setStaff(response.data);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchStaff();
    }, []);

    const handleDeleteAnimal = async (animalId: string) => {
        try {
            const response = await api.delete(`animal/delete/${animalId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                withCredentials: true,
            });
            if (response.status === 200 || response.status === 201) {
                setAnimals(animals.filter((animal) => animal.id !== animalId));
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mt-24 w-full">
            <Header />

            {/* Dashboard Heading */}
            <div className="w-full flex flex-col items-center justify-center py-6 text-center">
                <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">
                    Dashboard
                </h1>
                <p className="text-[var(--muted-foreground)] text-sm mb-4">
                    Manage animals and staff in your care.
                </p>

                {/* Toggle Switch */}
                <div className="flex items-center bg-[var(--card)] rounded-full shadow-md p-1 w-60">
                    <button
                        className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === "animal"
                            ? "bg-[var(--primary-color)] text-white"
                            : "text-[var(--foreground)]"
                            }`}
                        onClick={() => setActiveTab("animal")}
                    >
                        All Animals
                    </button>
                    <button
                        className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === "staff"
                            ? "bg-[var(--primary-color)] text-white"
                            : "text-[var(--foreground)]"
                            }`}
                        onClick={() => setActiveTab("staff")}
                    >
                        Staff Details
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full flex flex-col items-center justify-center py-8 px-4">
                {isLoading ? (
                    <p className="text-lg text-[var(--primary-color)]">Loading...</p>
                ) : activeTab === "animal" ? (
                    <div className="w-full max-w-6xl">
                        {/* Add Animal Button */}
                        <div className="flex justify-end mb-6">
                            <button
                                onClick={() => navigate("/add-animal")}
                                className="flex items-center gap-2 bg-[var(--primary-color)] text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
                            >
                                <PlusCircle size={18} /> New Animal
                            </button>
                        </div>

                        {animals.length === 0 ? (
                            <p className="text-center text-[var(--muted-foreground)]">
                                No animals found. Add one to get started!
                            </p>
                        ) : (
                            <div>
                                <h1 className="text-2xl text-center font-bold text-black mb-2">
                                    Animals in the Zoo
                                </h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {animals.map((animal) => (
                                        <div
                                            key={animal.id}
                                            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg hover:scale-105 transition duration-200"
                                        >
                                            <div>
                                                <h2 className="text-xl font-bold text-[var(--primary-color)] capitalize mb-2">
                                                    {animal.species}
                                                </h2>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    <span className="px-2 py-1 rounded bg-[var(--muted)] text-xs font-semibold">
                                                        {animal.gender}
                                                    </span>
                                                    <span className="px-2 py-1 rounded bg-[var(--muted)] text-xs font-semibold">
                                                        {animal.isChild ? "Child" : "Adult"}
                                                    </span>
                                                </div>
                                                <div className="text-sm space-y-1">
                                                    <p>Age: <span className="font-semibold">{animal.age} yrs</span></p>
                                                    <p>Weight: <span className="font-semibold">{animal.weight} kg</span></p>
                                                </div>
                                                <div className="mt-3 text-xs text-[var(--muted-foreground)] border-t pt-2">
                                                    <p>Created: {new Date(animal.createdAt).toLocaleDateString()}</p>
                                                    <p>Updated: {new Date(animal.updatedAt).toLocaleDateString()}</p>
                                                </div>
                                            </div>

                                            <div className="flex gap-2 mt-4">
                                                <button
                                                    className="flex-1 bg-[var(--warning-color)] rounded py-2 text-sm font-medium hover:translate-y-0.5 duration-100 cursor-pointer text-black"
                                                    onClick={() => navigate("/update-animal", { state: animal })}
                                                >
                                                    Update Details
                                                </button>
                                                <button
                                                    className="flex-1 bg-[var(--danger-color)] rounded py-2 text-sm font-bold hover:translate-y-0.5 duration-100 cursor-pointer text-white"
                                                    onClick={() => handleDeleteAnimal(animal.id)}
                                                >
                                                    Remove Animal
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="w-full max-w-6xl">
                        {staff.length === 0 ? (
                            <p className="text-center text-[var(--muted-foreground)]">
                                No staff members available.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {staff.map((member) => (
                                    <div
                                        key={member.id}
                                        className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-6 flex flex-col hover:scale-105 transition duration-200"
                                    >
                                        <h2 className="text-xl font-bold text-[var(--primary-color)] mb-1">
                                            {member.name}
                                        </h2>
                                        <span className="text-[var(--foreground)]">Role: {member.role}</span>
                                        <span className="text-[var(--foreground)]">Age: {member.age}</span>
                                        <span className="text-xs text-[var(--muted-foreground)] mt-2">
                                            Joined: {new Date(member.joinedAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;