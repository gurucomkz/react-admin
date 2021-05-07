import styled from 'styled-components'

const TableStyles = styled.div`
  .crud {
    display: flex;
    height: 100%;
    
    height: calc(100vh - 56px);
    @media (min-width: 0px) and (orientation: landscape) {
      height: calc(100vh - 48px);
    }
    @media (min-width: 600px){
      height: calc(100vh - 64px);
    }

    flex-direction: column;
    .tableWrapInner {
      flex: 1;
      overflow: auto;
    }
    .pagination {
      border-top: silver 1px solid;
    }
  }
  table {
    min-width: 100%;
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th{
      position: sticky;
      top: 0;
      z-index: 1;
      background:#eee;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`

export default TableStyles;