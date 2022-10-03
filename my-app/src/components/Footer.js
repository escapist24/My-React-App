import React from 'react'

function Footer() {
  return (
    <div>
      <p style={{
       bottom:"0",
       width:"100%",
       textAlign:"center",
       verticalAlign: "baseline",
      
      }}
       >
        Copyright &copy; {new Date().getFullYear()} Priti Kumari</p>
    </div>
  )
}

export default Footer
