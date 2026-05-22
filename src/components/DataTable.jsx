export default function DataTable({
    columns = [],
    rows = [],
}) {
    return (
        <div className="overflow-x-auto rounded-3xl border border-slate-800">
            <table className="w-full text-sm">
                <thead className="bg-slate-900">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column}
                                className="px-4 py-3 text-left text-slate-400 font-medium"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="border-t border-slate-800"
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-4 py-3 text-slate-300"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}