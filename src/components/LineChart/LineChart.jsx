
import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
const LineChart = () => {


    const subjectMarksData = [
        { id: 1, name: "John Doe", math: 85, physics: 76, chemistry: 89 },
        { id: 2, name: "Jane Smith", math: 78, physics: 82, chemistry: 75 },
        { id: 3, name: "Tom Johnson", math: 92, physics: 88, chemistry: 90 },
        { id: 4, name: "Emily Davis", math: 64, physics: 70, chemistry: 68 },
        { id: 5, name: "Michael Brown", math: 70, physics: 75, chemistry: 72 },
        { id: 6, name: "Sarah Wilson", math: 88, physics: 90, chemistry: 85 },
        { id: 7, name: "David Lee", math: 76, physics: 78, chemistry: 80 },
        { id: 8, name: "Olivia Miller", math: 90, physics: 85, chemistry: 92 },
        { id: 9, name: "James Taylor", math: 72, physics: 68, chemistry: 74 },
        { id: 10, name: "Ava Davis", math: 95, physics: 92, chemistry: 96 }
    ];



    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='black'></Line>
                <Tooltip></Tooltip>
            </LChart>
        </div>
    );
};

export default LineChart;