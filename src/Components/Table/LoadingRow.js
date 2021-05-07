import React from 'react';

function LoadingRow({colSpan}) {
    return (
        <tr>
            <td colSpan={colSpan}>
                Loading...
            </td>
        </tr>
    );
}

export default LoadingRow;