import Call from "@/components/Call";

export default function Page({ params }) {
    return (
        <PanelGroup direction="horizontal" id="group" className="gap-2">
      <Panel id="right-panel" defaultSize={80}>
          <Card className="shadow-none h-full">
            <CardBody>
            <Call appId={"51dc4c3e3d284f9d8944d4b2e7218604"} channelName={params.channelName}></Call>
            </CardBody>
          </Card>  
      </Panel>
      <PanelResizeHandle
        id="resize-handle"
        className="bg-gray-200 w-1 h-20 my-auto rounded"
      />
      <Panel
        id="left-panel"
        defaultSize={20}
        minSize={12}
        maxSize={20}
        collapsible
        className="flex flex-col gap-8"
      >
        <PomodoroTimer />
        <Todo style={{ margin: "8px 0" }} />
      </Panel>
    </PanelGroup>
    )
}