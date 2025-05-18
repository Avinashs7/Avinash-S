import { Data } from "@/types/data"

interface EducationProps{
    data:Data|undefined;
}
export function Education({data}:EducationProps){
    return (
        <>
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Education</h3>
            <div className="timeline-container relative">
              <div className="timeline-line absolute left-0 md:left-[7px] top-0 bottom-0 w-[2px] bg-primary/20"></div>

              {
                data?.education?.map((value,index)=>{
                  return (
                    <div key={index} className="space-y-12 relative">
                      <div className="timeline-item pl-8 md:pl-10 relative">
                        <div className="timeline-dot absolute left-[-4px] md:left-0 top-0 h-4 w-4 rounded-full bg-primary"></div>
                        <div className="space-y-2">
                          <div className="flex flex-col md:flex-row justify-between">
                            <h4 className="text-xl font-semibold">{value?.qualification}</h4>
                            <span className="text-muted-foreground text-sm pr-3">{value?.time}</span>
                          </div>
                          <p className="text-primary font-medium">{value?.institute}</p>
                          <p className="text-muted-foreground">
                            {value?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                )
                })
              }


            </div>
          </div>
        </>
    )
}