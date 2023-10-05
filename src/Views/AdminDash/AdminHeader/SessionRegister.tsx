
import "../App.css";
import { useTable, Column } from "react-table";

interface SessionData {
  number: number;
  fname: string;
  lname: string;
  employee_code: string;
  branch: string;
  id_number: string;
  phone_number: string;
  signature: string;
  
  // Add more fields...
}

const sessionData: SessionData[] = [
  {
    number: 1,
    fname: "Ntokozo",
    lname: "Magwaza",
    employee_code: "BT044",
    branch: "JHB",
    id_number: "9505190814089",
    phone_number: "0681195776",
    signature:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAAuCAYAAABkrvZ7AAAQQElEQVR4nO2de1BU5R/Gn3N2F3ZBuYmCgCJeYBTI8ZYUKGre0NQYMNIcwluapilaiDqZdrNisCmtSTNNm1LT0SFL8hILAuL9OgohiiBqoALKsrAsPL8//O0ZVlBBhc04n5l3cM97+77vOc97Oe/7HgWtVksACA4OhoyMzMMRLW2AjMyzhCwYGZlGIAtGRqYRyIKRkWkEsmBkZBqBLBgZmUYgC0ZGphHIgpGRaQSyYGRkGoHySRMwGo3IyclBUVERdDodjEYjqqurYTQaQRKCINSJQxIKhQKiKJo5AFAoFFAqlWZ/FQoFrKysIIoi1Go1NBoN1Go1rKysYGVlBWtr6ycthoxMg2i0YPLz87Fjxw5cvHgRycnJyMrKQlVVVVPY1mAEQYC1tbUkIKVSCQcHB9jY2EjXBUGAIAhSGKPRCEEQJHFXV1dL/zYajaisrERFRQX0ej3u3r0rhTcajWjdujWcnJzg6emJzp07w93dHW5ubvD390fPnj2hUqksWh8yTUeDBZOXl4fY2Fjs2LEDlZWVZn7t2rWDv78/PD09odFopB7A2toaSqUSNTU1Uo8D3OthqqqqJGc0GlFVVQW9Xo/q6mrpYa3t9Ho9SktLYTQaYTAYoNfrUVlZiZqaGpCUwpm4cePGU6qiuuj1ehQWFiIzM7OOn52dHXr16gVvb2/06dMHo0aNQocOHZrMFpnmRXjU5sv8/HwsXrwYu3btQllZGVQqFUaMGIFx48bBz88P3bt3h729fbMaXZuqqipUVFSgsrJSEpJOp5PEaOo1gHtCrampkXqT+oaFpp5IqVRCpVJBo9FAoVDA1tYWoijCaDRK4r19+zaKioqQm5uL06dP4+TJk8jJyTGzTxRFeHl5wdvbGz4+Phg0aBACAwPh7OxsieqSeQSbNm3CnTt3MGvWLGmaUJsHCqayshJxcXH49NNPodPp4OzsjPfeew/Tpk2Do6Nj81j/DKLT6ZCXl4fMzEykpqYiNTUVly9fxs2bN6UeVhAEtG3bFv7+/hg+fDgGDhwIb29vODk5Wdj6ls2VK1fQqVMnAMDmzZsxadKkOmHqFUx6ejpmz56NU6dOwdXVFXPnzkV0dLQ8uX4Cbt26heTkZGi1WmRnZyMzMxO5ublmYXx8fDBmzBgEBATAz88PPj4+FrK2ZWIwGPDaa69Br9fj+++/h7u7e91AWq2WWq2WJlatWkUABMB+/foxLy+PzUVGRgbv3LnT4PB3795lVlZWE1rUtBw9epRLlizh2LFj6eDgINW7yfn5+fGLL76gVqtlZWWlpc2VISkJpqSkhJMnTyYAiqLIWbNmUafTNZshe/fupSAI9PDw4N27dxsUZ9iwYbSysuKFCxea2Lqmp6KigomJiVy+fDlDQ0NpZ2dnJh4XFxdOnz6dX3/9Nf/++29Lm9tikQTj5+dHAOzevTsPHjzY7IYUFBTQw8ODALhnz55Hhk9MTJQepoaEf9bQ6/XUarWMj4/nsGHDqFarpfKKosjevXtzzpw53L9/Pw0Gg6XNbTFIghEEgVFRUdTr9RYxZNGiRbS3tycAenl5cdOmTXXC5OfnMz8/nyQ5aNAg6QHat29fc5vb7Oj1eh45coTLli1j3759aW1tLZW/VatWHDx4MNeuXcvc3FxWV1db2tz/LJJg6ntAm4Py8nImJCTUGb8D4MKFC6VwycnJtLOzo1qtZn5+vlm4pKQki9huSUpKSpiYmMh58+axX79+ZvXRuXNnTpkyhb///juNRqOlTf3XcuTIERYWFjYqziPXYZqa6OhorFq1yuyaQqFAdXU1AGDfvn0YOnQoxo4di99++w3Tp0/HoEGD8Prrr0vhU1NTERgY+Mi8Tpw4gbS0NBQXF4MklEolfH198corrzzdQlmA06dPY/fu3UhNTUVSUpK0uOzm5obw8HBMmDABAQEBFrbSsty4cQMHDhxAZmYmzpw5g4SEBISFhWH79u0NT+T+t2TNTURERJ2eZfLkyRRFkQDYo0cP3r59m4IgUK1W89q1axwwYAABSBPjtLS0h+ZRXl7O0NBQKc373Q8//NBMpW0erl+/zi1btnDcuHFUKBQEQEEQGBAQwBUrVvD69euWNrHJqaio4IEDB7h06VKGhobSz8+vzv13c3Pjhg0bGpXuE2++fFLq23cVEBAAkti4cSPOnz+PpKQkkJQWTA8dOoQ+ffqgVatWSE5OhiAI0Ol0yMnJQXl5OXQ6HQwGA7p27Ypu3bohNjYWO3fuhJeXF2bPno0ePXrAysoKBw8exPLly3HixAlMnjy5ScpXWlra7DshXF1dERERgYiICJSVlUGr1eLzzz/HoUOHkJGRgRUrViA4OBixsbEIDg6GUmnxx+CxIYkbN24gOzsbhw4dwl9//YWsrCxcv34dBoNBCmdnZ4c+ffogODgYQUFB6NevH9zc3BqfoaV7mMjIyDot/nfffcdz585JE9tevXoRANu3b89ly5YRABcvXsznnnuOALhz5062bdu23t4jPT2drVu3plqtZlFRkVnee/bsIQA6OjoyNzf3seyvqal5oN/WrVsJgP7+/k9lHaWgoIDr169nSEgIXVxcuGrVqofmfz/Z2dmMiIigra2tVD9t2rThmjVrGvwq39IYDAZmZmZy69atfOONNx543x0cHBgYGMgPPviAZ86ceWr5W1wwprWf+wVDklOnTpWGE/j/WoS/vz9VKhX/+ecfSTAdO3YkAPr6+nLkyJEcM2YMXV1dCYDr1q2jIAj09PSsk/f27dulPDt27Njoh+b06dN0cnJicHBwvXFrDzePHz/+WPVz5swZrl69moMHD653SJment7oNO/cucPPPvtMaogA0N7enrNnz+bevXtZVVX1WLY+bYqKipiUlMSNGzdywYIFDAoKMnu9bnIeHh4cPnw433zzTW7evJk5OTlNZpPFBbNy5coHCuby5cvUaDTSdZNwxowZQ5Ls2bOn5NepUyezdAMDAwmABw8epI2NDTUaTZ28lyxZYpbviRMnSJK7du2io6Mj1Wo1IyMjuW3btjpxL1y4QG9vbyluaGhonTATJkyQ/GNiYrhkyRIuWrSIMTExjImJ4fvvv88tW7bwypUr9dbNN998I5XZ1CAsWrSIv/zyC2fMmEEAfOGFF+jq6kqVSkUHBweOHTuWa9eubXDPk5aWxtmzZ5vtNPD19WVcXByvXr3aoDSelOLiYmq1Wn777bdcvHgxw8LC2KVLl3obCC8vL06aNInLli3jhg0bmJmZ2Sw2mrC4YI4dO1anYkyCIclJkyaZ+QmCwHPnzpGkNPk3xSkvL+fdu3dpNBrp6+tLALxw4QL79+9PANy/f79Z3qYeyuSioqKYlZXFsLAwM4EKgsCVK1dK8e7cucNu3boRAGfOnEk7OzuKolintQ8PD693uHC/EwSBn3zySZ26MQ0/BUHgtm3bzEQwf/58Kb6VlRWdnJzM1mZCQkL48ccfP1CM91NcXMydO3dy9OjR0v1QqVQMDQ1lRkZGg9J4FHl5eUxMTGRcXBynTJnCkJAQ+vj41CsMKysr9unTh3PnzuWPP/7I/fv3S2twlsTigiHJd95554GCKS0tpbu7u+QXHx8v+dVevKzdEtd2I0eOZFxcHAHQ2tqaISEhnDNnDqOiouqN4+bmxoCAAAL3FkQ3bdok3dCEhASS5I4dOwjc2xVhMBg4d+5cAvf23tXm1VdfldIVRZFbtmyhqb61Wi3Xr18vDTE6d+5cp17KysqkNZaoqCgzP1MPA4CXL18mSVZXVzMlJUXaMQGA06ZNa/T9uHTpEqdPn27WYLz11lsN6rXy8/OZkJDADz/8kBEREXz++efZoUMHMzHf70RRpL+/P99++20mJCTw4sWL/9q9c5JgGjN5fNqsWLHigYIhyfPnzxMAlUql2fWFCxc+tOU2vVJtqLOxsTETn2nP1ocffkjg3mvsY8eOcfz48QTAjz76iOS9sbajoyMBcN68eZJ9pnAA2L9//3rL7ubmJuVZX29w9uxZWltbU6FQsLi4WLpu6nnVanW9cWr3mg2lqqqKOp2OxcXFvHHjBo8ePcrx48dL9eHm5sYvv/ySy5Yt49SpUzlq1Cj27duX3bp1o4uLy0NFodFo6OnpycDAQM6cOZOrV6+mVqtlbm4uKyoqGmyjpZEWLocMGQJ7e3u0adMGrVq1glqtho2NDTQajXSs1+RUKpXkTGf2q6qqzI4Cm67X/v2g60lJSUhJSYGJ0aNHo3fv3tL5kaqqKsTHx8PLywthYWEAAJIgiaysLFhbW+PUqVO4efMmRFFETU0NXF1d0bNnT2zbtk06QPYwnJ2dERQUhF27dknXIiIiYGVlBZLYvXs3SkpKIIqilPfQoUPRtm1bkEReXh7S09MBAC+99BKcnJyQnp6OgoICAPdOpQ4YMMDs1CkA/PnnnygvLwdwb/HY3t4eJGEwGKBUKkEShw8fxq1bt/Diiy/C1tYWJHHmzBkUFhZCpVIhMDBQOnlqcmlpaQAABwcHdO3aFQCk06wGgwGVlZVmzmAwoKam5pH1VB+tW7eGu7s7nJ2d4eTkBGdnZ3Tq1AldunRB586d/1NnfSTBzJw5Ezdv3kRxcbG0yi4jU5t27dphzpw58PLygru7O9q3bw9XV1eLnrhtbqQVqwsXLgC41/KVlZWhuLhYOidvaoVM5+9NR3yrq6ulltJoNEKhUEhpNPQvSem4cO0vzNTuiRp7jf//Wo3pyLHJ3+TeffddnD9/Hh4eHrh69SqGDx+OBQsW1Bu2vt8FBQVwcXGBUqmsEy4lJQVLly6VbDCV9WE4OTlhy5YtyM3NxfHjx3H06FGcPXvW7OMi/v7++Omnn6BWq5Gbm4sRI0ZIfpmZmbCxsZHKe/jwYYSHh6OmpgYTJ05EdHQ0dDodysvLJVtN9tWuMwDSV3pMaYmiCI1GA3t7e3Tr1u2RZfnP82+Y9Dcn2dnZtLa2pkql4tq1awmAsbGxTzWPP/74w+xFxfz586V1oftd//79mZqaWieN6upqXrt2jZcuXeKlS5fMJsHr1683S2PixImcMWMGIyMj+fLLL5udpfn111+fatlaOs/unojHJC4uDpWVlYiJiUH79u0B3BvnP01CQkJw7tw5xMfHo2vXroiMjERcXBwKCwtRUlIC4F6Lbmtriw4dOtT77TZRFCX77mfv3r1mv3/++ed640dHRyM8PPwplEjGRIsTzNWrVwEACxcuREZGRpPl4+DggBUrVki/RVGEq6srXF1dnzjtNWvWYODAgSgvL4etrS00Gg0EQYBGo5G+mebt7S1/rKQJULa0/9vSNC9wdnZGaWkpAKBVq1aWNKnRtGnTBrNmzbK0GS2SFvdtZdaahK9btw4A4OvraylzZJ4xWpxgjEYjRFFESkoKkpOTERgYiKCgIEubJfOM0OIEo1AoQBJTpkwBAMyaNUt6HS4j8yhanGA0Gg1IIicnBz4+Ppg4caKlTZJ5hmhxghkyZAgEQYCjoyO++uorS5sj84whkA1Yiv6PcfLkSXh5eT319ReZ/z4tUjAyMo9LixuSycg8CbJgZGQawf8AmWz8IT5w7AMAAAAASUVORK5CYII=",
  },

  {
    number: 2,
    fname: "Avintha",
    lname: "Gupthar",
    employee_code: "BT0443",
    branch: "DBN",
    id_number: "0005190813088",
    phone_number: "0681195776",
    signature:
      "",
  },

  {
    number: 3,
    fname: "Luthando",
    lname: "Ngqulunga",
    employee_code: "BT0441",
    branch: "JHB",
    id_number: "9905190812078",
    phone_number: "0681195776",
    signature:
      "data:image/png;base64,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",
  },

  // Add more data...
];

const columns: Column<SessionData>[] = [
  { Header: "#", accessor: "number" },
  { Header: "FIRST NAME", accessor: "fname" },
  { Header: "LAST NAME", accessor: "lname" },
  { Header: "EMP CODE", accessor: "employee_code" },
  { Header: "BRANCH", accessor: "branch" },
  { Header: "ID NUMBER", accessor: "id_number" },
  { Header: "PHONE NUMBER", accessor: "phone_number" },
  {
    Header: "SIGNATURE",
    Cell: (tableProps) => (
      <div>
        <img src={tableProps.row.original.signature} />
        {/* {tableProps.row.original.fname} */}
      </div>
    ),
    accessor: "signature",
  },
];

const SessionRegister: React.FC = () => {
  
  const rowsWithSignature = sessionData.filter((row) => row.signature);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: sessionData.filter((session) => {
        return session; 
      }),
    });

  return (
    <div className="register">
      <h2 className="heading">Power Skills Training Register</h2>
      <h4>Number of Attendees: {rowsWithSignature.length}</h4>
      <table {...getTableProps()} className="rtable">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SessionRegister;
