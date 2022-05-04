import { Table } from "antd";
import { useEffect, useState } from "react";
const TransactionHistoryTable = ({ tableData }) => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(tableData);
    }, [tableData]);

    const columns = [
        {
            title: "Event",
            dataIndex: "eventTitle",
            render: (text) => <h6>{text}</h6>,
        },
        {
            title: "From",
            dataIndex: "eventTitle",
            render: (text) => <h6>{text}</h6>,
        },
        {
            title: "To",
            dataIndex: "eventTitle",
            render: (text) => <h6>{text}</h6>,
        },
        {
            title: "Price",
            dataIndex: "eventTitle",
            render: (text) => <h6>{text}</h6>,
        },
        {
            title: "Date",
            dataIndex: "eventTitle",
            render: (text) => <h6>{text}</h6>,
        },
    ];
    return <Table columns={columns} dataSource={data} />;
};

export default TransactionHistoryTable;
