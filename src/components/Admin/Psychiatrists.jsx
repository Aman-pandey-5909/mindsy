import React, { useState } from "react";
import UserCardComponent from "../../components/Card/UserCardComponent";
import { usePsychiatrists } from "../../hooks/usePsychiatrists";

const AdminPsychiatrists = () => {
  const { data: docs, isLoading } = usePsychiatrists();
  // const [docs, setDocs] = useState([
  //   {
  //     id: 1,
  //     name: "Dr. Priya Sharma",
  //     exp: "4 yrs",
  //     rating: "4.5",
  //     reviews: "200",
  //     speciality: "Anxiety, Depression",
  //     fee: "Free",
  //     status: "approved",
  //   },
  //   {
  //     id: 2,
  //     name: "Dr. Mohan Ray",
  //     exp: "2 yrs",
  //     rating: "4.0",
  //     reviews: "80",
  //     speciality: "Stress",
  //     fee: "₹200",
  //     status: "pending",
  //   },
  // ]);

  const approve = (id) =>
    // setDocs((d) => d.map((x) => (x.id === id ? { ...x, status: "approved" } : x)));
    // TODO: implement approve mutation
    console.log("approve", id);

  const restrict = (id) => 
    // setDocs((d) => d.filter((x) => x.id !== id));
    // TODO: implement restrict mutation
    console.log("restrict", id);

  return (
    <div className="w-[750px] mx-auto my-12">
      <h1 className="text-2xl font-semibold mb-5">Psychiatrists</h1>

      <h2 className="font-semibold mb-3">Pending Approvals</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {docs?.filter((d) => d.status === "pending").length === 0 && (
            <p className="text-gray-600 text-sm mb-5">No pending requests.</p>
          )}

          <div className="flex flex-col gap-4 mb-10">
            {docs
              ?.filter((d) => d.status === "pending")
              .map((doc) => (
                <UserCardComponent
                  key={doc.id}
                  type="psychiatrist"
                  data={doc}
                  buttons={[
                    { label: "Approve", variant: "primary", onClick: () => approve(doc.id) },
                    { label: "Reject", variant: "danger", onClick: () => restrict(doc.id) },
                  ]}
                />
              ))}
          </div>
        </>
      )}

      <h2 className="font-semibold mb-3">Approved</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-4">
          {docs
            ?.filter((d) => d.status === "approved")
            .map((doc) => (
              <UserCardComponent
                key={doc.id}
                type="psychiatrist"
                data={doc}
                buttons={[
                  { label: "Restrict", variant: "danger", onClick: () => restrict(doc.id) },
                  { label: "View Details", onClick: () => console.log(doc) },
                ]}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default AdminPsychiatrists;
