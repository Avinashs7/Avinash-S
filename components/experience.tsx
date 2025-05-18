
import { Badge } from "@/components/ui/badge"
import { Data } from "@/types/data"

interface ExperienceProps{
    data:Data|undefined;
}

export function Experience({data}:ExperienceProps){
    return (
        <>
            <div className="timeline-container relative">
              <div className="timeline-line absolute left-0 md:left-[7px] top-0 bottom-0 w-[2px] bg-primary/20"></div>

              <div className="space-y-12 relative">
                
                {
                  data?.experience?.map((value,index)=>{
                    return(
                      
                        <div key={index} className="timeline-item pl-8 md:pl-10 relative">
                          <div className="timeline-dot absolute left-[-4px] md:left-0 top-0 h-4 w-4 rounded-full bg-primary"></div>
                          <div className="space-y-2">
                            <div className="flex flex-col md:flex-row justify-between">
                              <h4 className="text-xl font-semibold">{value?.role}</h4>
                              <span className="text-muted-foreground text-sm pr-3">{value?.time}</span>
                            </div>
                            <p className="text-primary font-medium">{value?.company}</p>
                            <p className="text-muted-foreground">
                              {value?.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {
                                value?.tech_stack.map((tech,i)=>{
                                  return (
                                    <Badge key={i} variant="outline">{tech}</Badge>
                                  );  
                                })
                              }
                              
                            </div>
                          </div>
                        </div>
                      
                    );
                  })
                }

                
              </div>
            </div>
        </>
    )
}