import React from "react";
import recipes from '../recipes';
import Swal from 'sweetalert2';
const Menu = () => {
    const handleOrder = (id) => {
        console.log(id, 'id is clicked');
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to order this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Order it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Ordered!',
                'Your order has been confirmed.',
                'success'
              )
            }
          })

    }
    return(
    <div className="menu-container">
        <div>
            <h2>This weeks specials!</h2>
            <button>Order Menu</button>
        </div>

        <div className="cards">
            {
                recipes.map(recipe => <div key={recipe.id} className="menu-items">
                    <img src={recipe.image} alt=""></img>
                    <div className="menu-content">

                       <div className="menu-header">
                        <h5>{recipe.title}</h5>
                        <p>{recipe.price}</p>
                       </div>
                    </div>
                    <p>{recipe.description}</p>
                    <button className="orderbtn" onClick={() => handleOrder(recipe.id)} >Order Now</button>
                     </div>)

            }

        </div>
       </div>
    );
}

export default Menu;