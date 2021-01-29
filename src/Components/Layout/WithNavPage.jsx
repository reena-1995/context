import React from 'react'

const WithNavPage = (Props) => {
    return (
        <div className="mainDiv">
           <header class="py-3 headerClass">
            
            </header>
            <main>
            <div class="d-table parentMain">
                <div class="d-table-cell sidebar">
                    Div 1
                </div>
                {Props.children}
            </div>
            </main>
              
            <footer class="py-3 footerClass">

            </footer>
        </div>
    )
}

export default WithNavPage
