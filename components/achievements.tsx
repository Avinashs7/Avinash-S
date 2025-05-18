import { Data } from "@/types/data"

interface AchivementProps{
    data:Data|undefined;
}
export function Achievements({data}:AchivementProps){
    return (
        <>
            <div className="space-y-4 pt-8">
                <h3 className="text-2xl font-semibold">Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        data?.achievements?.map((value,index)=>{
                            return (
                                <div key={index} className="p-6 bg-muted/40 rounded-lg">
                                    <h3 className="text-xl font-semibold">{value?.name}</h3>
                                    <p className="text-primary font-medium">{value?.institute}</p>
                                    <p className="text-muted-foreground mt-2">
                                    {value?.description}
                                    </p>
                                    <p className="text-muted-foreground text-sm mt-2">{value?.time}</p>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </>
    )
}