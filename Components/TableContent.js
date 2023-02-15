import React from 'react'

const TableContent = ({channel,handleOnplay}) => {
  return (
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2  min-w-full sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="border-b ">
            <tr className=''>
              <th scope="col" class="text-lg  font-bold  text-green-500   py-4 text-left">
                Channel
              </th>
              <th scope="col" class="text-lg  font-bold  text-green-500  px-6 py-4 text-left">
                Categories
              </th>
              <th scope="col" class="text-lg  font-bold text-green-500  px-6 py-4 text-left">
                Url
              </th>
              <th scope="col" class="text-lg font-bold  text-green-500  px-6 py-4 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
           
            {channel.map((val,index)=>{
                return  <tr key={index} class="border-b border-gray-600">
                <td className="  py-4 whitespace-nowrap text-sm font-medium text-slate-300 ">
                <p>{val.name}</p>
                    </td>
                <td class="text-sm text-slate-300  font-light px-6 py-4 whitespace-nowrap">
                  {val.categories.length>0?val.categories[0].name:"Unknown"}
                </td>
                <td class="text-sm hid text-slate-300  font-light px-6 py-4 whitespace-nowrap">
                    {val.url}
                  
                </td>
                <td class="text-sm text-slate-300  font-light px-6 py-4 whitespace-nowrap">
                 <div className="buttons flex gap-3">
                    <button onClick={()=>{handleOnplay(val.url)}}>Play</button>
                    <button>Copy</button>
                 </div>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}



export default TableContent