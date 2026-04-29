type Props<T> ={
    data: T[];
    children: React.ReactNode;
    emptyMessage: string;
}

const DataStateWrapper = <T,>({ data, children, emptyMessage } : Props<T>) => {
     if (!data || data.length === 0) {
          return (
              <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                  <p className="text-lg font-medium">
                      {emptyMessage || "No records found"}
                  </p>
              </div>
          );
      }
  
      return children;
}

export default DataStateWrapper