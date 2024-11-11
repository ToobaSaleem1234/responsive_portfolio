import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Education from "./education"
import Skills from "./skills"
import Projects from "./projects"
import Contact from "./contact"

    export function Detail() {
      return (
        <Tabs defaultValue="education" className="w-[full] p-3">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          
          {/* education */}
          
          <TabsContent value="education">
            <Education/>
          </TabsContent>
          
          {/* skills */}
          
          <TabsContent value="skills">
            <Skills/>
          </TabsContent>
          
          {/* projects */}
          
          <TabsContent value="projects">
            <Projects/>
          </TabsContent>

          {/* contact */}

          <TabsContent value="contact">
            <Contact/>
          </TabsContent>

        </Tabs>
      )
    }
export default Detail