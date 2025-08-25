import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import { api } from "@/services/api";
import Header from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
const animalDashboard = () =>{
    const [isLoading,setIsLoading]=useState(true);//change it to  true togive load effect
    const navigate=useNavigate();
    interface Animal{
        id:string,
        species:string,
        gender:string,
        isChild:boolean,
        age:number,
        weight:number,
        createdAt:string,
        updatedAt:string
    }
    const [animals,setAnimals]=useState<Animal[]>([]);
    useEffect(()=>{
        const fetchAnimals=async()=>{
            try{
                const response=await api.get("/animal/get",{
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                    withCredentials:true
                });
                if(response.status===200 || response.status===201){
                    setAnimals(response.data);
                    setIsLoading(false);
                }   
            }catch(err){
                console.error(err);
            }
        };
        fetchAnimals();
    },[]);
    const handleDelete=async(animalId:string)=>{
        try{
            const response=await api.delete(`animal/delete/${animalId}`,{
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                withCredentials:true
            })
            if(response.status===200 || response.status===201){
                setAnimals(animals.filter(animal=>animal.id!==animalId));
            }
            else{
                
            }
        }
        catch(err){console.error(err)};
    }
    return (
    <div className="mt-16 w-full">
        <Header></Header>
        <div className="w-full flex flex-col items-center justify-center py-8">
            {isLoading ? (
                <p className="text-lg text-[var(--primary-color)]">Loading animals...</p>
            ) : (
                <>
                <div className="w-full h-15 flex md:px-30 justify-around md:justify-between items-center my-10">
                    <h2 className="text-black text-2xl md:text-4xl">Animal dashboard</h2>
                    <button className="bg-[var(--primary-color)] cursor-pointer h-10 w-auto px-10 rounded hover:text-white" onClick={()=>navigate("/create/animal")}>Create Animal</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                    {animals.map((animal) => (
                        <div
                            key={animal.id}
                            className="bg-[var(--card)] border-2 border-[var(--border)] rounded-2xl shadow-lg p-6 flex flex-col gap-2 hover:scale-105 transition-transform duration-200"
                        >
                            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-1 capitalize">{animal.species}</h2>
                            <div className="flex flex-wrap gap-2 text-[var(--foreground)]">
                                <span className="px-2 py-1 rounded bg-[var(--muted)] text-xs font-semibold">Gender: {animal.gender}</span>
                                <span className="px-2 py-1 rounded bg-[var(--muted)] text-xs font-semibold">{animal.isChild ? 'Child' : 'Adult'}</span>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <span className="text-sm">Age: <span className="font-semibold">{animal.age} yrs</span></span>
                                <span className="text-sm">Weight: <span className="font-semibold">{animal.weight} kg</span></span>
                            </div>
                            <div className="flex flex-col mt-2 text-xs text-[var(--muted-foreground)]">
                                <span>Created: {new Date(animal.createdAt).toLocaleDateString()}</span>
                                <span>Updated: {new Date(animal.updatedAt).toLocaleDateString()}</span>
                            </div>
                            <button className="bg-[var(--warning-color)] rounded py-2 my-1 hover:translate-y-0.5 duration-100 cursor-pointer hover:scale-99 text-black" onClick={()=>navigate("/update/animal",{state: animal})}>Update</button>
                            <button className="bg-[var(--danger-color)] rounded py-2 my-1 hover:translate-y-0.5 duration-100 cursor-pointer hover:scale-99 text-bold" onClick={()=>handleDelete(animal.id)}>Delete</button>
                        </div>
                        
                    ))}
                </div>
                </>
            )}
        </div>
        <Footer></Footer>
        </div>
    );
}
export default animalDashboard;