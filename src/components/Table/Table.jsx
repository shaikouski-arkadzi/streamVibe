import "./Table.scss"

const Tabs = ({ className, headCells = [], rows = [] }) => {
  return (
    <table className={className}>
      {headCells.length > 0 && (
        <thead>
          <tr>
            {headCells.map(({ children, width }) => (
              <th width={width} key={children}>
                {children}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(({ cells }, index) => (
          <tr key={index}>
            {cells.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
