import Call from "@/components/Call";

export default function Page({ params }) {
    return (
        <main className="flex w-full flex-col">
            <p className="absolute z-10 mt-2 ml-12 text-2xl font-bold text-gray-900">
                {params.channelName}
            </p>
            <Call appId={"51dc4c3e3d284f9d8944d4b2e7218604"} channelName={params.channelName}></Call>
        </main>
    )
}