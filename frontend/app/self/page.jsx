"use client";
import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import PomodoroTimer from "@/components/Pomodoro";
import Todo from "@/components/Todo";

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
      <Panel id="right-panel" defaultSize={80}>right</Panel>
    </PanelGroup>
  );
}

export default page;
