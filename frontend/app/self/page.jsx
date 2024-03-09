"use client";
import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import PomodoroTimer from "@/components/Pomodoro";
import Todo from "@/components/Todo";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Board from "@/components/Board";

function page() {
  return (
    //  <section className="flex w-full h-full">
    //   <div className="h-full flex flex-col">

    //   </div>

    //  </section>

    <PanelGroup direction="horizontal" id="group" className="gap-2">
      <Panel
        id="left-panel"
        defaultSize={20}
        minSize={12}
        maxSize={20}
        collapsible
        className="flex flex-col gap-8"
      >
        <PomodoroTimer />
        <Todo/>
      </Panel>
      <PanelResizeHandle
        id="resize-handle"
        className=" bg-gray-200 w-1 h-20 my-auto rounded"
      />
      <Panel id="right-panel" defaultSize={80}>
        

      <div className="flex w-full h-full flex-col">
      <Tabs aria-label="Options" className="shadow-none">
        <Tab key="music" title="Music" className="h-full">
          <Card className="shadow-none h-full">
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="jamboard" title="Jamboard" className="h-full">
          <Board/>
        </Tab>
        <Tab key="resources" title="Resources" className="h-full">
          <Card className="shadow-none h-full">
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
      </Panel>
    </PanelGroup>
  );
}

export default page;
