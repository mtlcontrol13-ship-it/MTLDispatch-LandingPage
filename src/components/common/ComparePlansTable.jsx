import React from "react";
import { ICONS } from "../../assets/icons";

const ComparePlansTable = () => {
  const planColumns = ["Core", "Plus", "Black", "Custom"];

  // You can tweak all the values below to your real data
  const groups = [
    {
      title: "Core features",
      rows: [
        {
          label: "Total limit",
          values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
        },
        {
          label: "Transaction fee",
          values: ["2.9% + $0.9", "2.7% + $0.9", "2.5% + $0.6", "2.3% + $0.3"],
        },
        {
          label: "Disbursement fee",
          values: ["—", "—", "Free", "Free"],
        },
      ],
    },
    {
      title: "Settlement options",
      rows: [
        {
          label: "Day of week fee",
          values: ["Free", "Free", "Free", "Free"],
        },
        {
          label: "Day of month fee",
          values: ["Free", "Free", "Free", "Free"],
        },
      ],
    },
    {
      title: "Added features",
      rows: [
        {
          label: "Secure payments",
          values: [true, true, true, true],
        },
        {
          label: "Apply tax rules",
          values: [false, true, true, true],
        },
        {
          label: "Multi-currency",
          values: [false, false, true, true],
        },
        {
          label: "Auto exchange rate",
          values: [false, false, false, true],
        },
      ],
    },
  ];

  const renderCell = (value) => {
    if (value === true) {
      return (
        <ICONS.CheckCircle2 className="mx-auto h-4 w-4 text-emerald-500" />
      );
    }
    if (value === false || value === null || value === undefined || value === "—") {
      return <span className="text-slate-300">—</span>;
    }
    return <span className="text-sm text-slate-700">{value}</span>;
  };

  return (
    <div className="mt-8 overflow-x-auto">
      <div className="inline-block min-w-full rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200">
        <table className="w-full border-separate border-spacing-y-2 text-left text-sm">
          <thead>
            <tr className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="py-3 pl-4 pr-4 align-bottom">Features</th>
              {planColumns.map((plan) => (
                <th key={plan} className="py-3 px-4 text-center align-bottom">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {groups.map((group) => (
              <React.Fragment key={group.title}>
                {/* Group header row */}
                <tr>
                  <td
                    colSpan={planColumns.length + 1}
                    className="py-3 pl-4 pr-4 text-xs font-semibold uppercase tracking-wide text-slate-500 bg-slate-50 rounded-xl"
                  >
                    {group.title}
                  </td>
                </tr>

                {group.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="bg-slate-50/60 hover:bg-slate-50 transition-colors rounded-xl"
                  >
                    <td className="py-3 pl-4 pr-4 text-sm font-medium text-slate-800">
                      {row.label}
                    </td>
                    {row.values.map((value, idx) => (
                      <td
                        key={idx}
                        className="py-3 px-4 text-center align-middle"
                      >
                        {renderCell(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparePlansTable;
