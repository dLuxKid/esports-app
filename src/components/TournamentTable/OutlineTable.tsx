

const data = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Mike Johnson', age: 28, city: 'Chicago' },
];

export default function OutlineTable() {

    const tableRowStyles = 'py-2 pr-2 text-left text-[#ACACAC] uppercase tracking-[1px] tiny-text w-1/5'
    const tableDataStyles = 'py-1 pr-2 body-text w-1/5'

    return (
        <div className="flex-start flex-col gap-6">
            <div className="flex-between w-full max-w-sm">
                <div className="flex flex-col gap-2">
                    <h1 className="title-text text-pry-green">Active</h1>
                    <span className="h-[2px] w-5/6 bg-pry-green"></span>
                </div>
                <div className="flex">
                    <h1 className="title-text text-pry-grey">Expired</h1>
                </div>
            </div>
            <div className="w-full">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className={tableRowStyles}>Name</th>
                            <th className={tableRowStyles}>Mode</th>
                            <th className={tableRowStyles}>Time</th>
                            <th className={tableRowStyles}>Date</th>
                            <th className={tableRowStyles}>Registration</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((item) => (
                            <tr key={item.id} className="border-b border-b-pry-grey hover:bg-pry-grey cursor-pointer">
                                <td className={`${tableDataStyles} pl-4`}>{item.id}</td>
                                <td className={tableDataStyles}>{item.name}</td>
                                <td className={tableDataStyles}>{item.age}</td>
                                <td className={tableDataStyles}>{item.city}</td>
                                <td className="py-2">
                                    <button type="button" className="text-center font-semibold py-2 px-9 transition-all duration-300 hover:opacity-90 cta-btn h-12">Check in</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
