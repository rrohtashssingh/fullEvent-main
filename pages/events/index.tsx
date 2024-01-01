import Table from "@/components/util/Table";
import Tab from "@/components/util/Tab";
import FullEvent from "./FullEvent";
import TopEventbg from "./TopEventbg";
export default function Page() {
  const header = ["Event Name", "Description", "Date", "Created By"];
  const tabs = ["All Events", "My Events", "Registered Events"];
  const data = [
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
    {
      "Event Name": "abc",
      Description: 1,
      Date: "2023-12-10",
      "Created By": "Ahmed",
    },
  ];
  return (
    <>
    <div className="eventPageBg">
      <TopEventbg/>
    </div>
      <h1>Event Route</h1>
      <div className="text-sky-200 p-4">
        <Tab data={tabs} />
      </div>
      <div className="p-4">
        <Table data={data} header={header} />
      </div>
      <div className="p-6">
        <FullEvent/>
      </div>
    </>
  );
}
