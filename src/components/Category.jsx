import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/category.css'

import delivery from '../assets/images/delivery.png'
import discode from '../assets/images/discode.png'
import shopbag from '../assets/images/shopbag.png'
import sale from '../assets/images/sale.png'
import gift from '../assets/images/gift.png'

function Category() {
  return (
    <div className="category">
        <ul className="cat">
            <Link>
                <div className="circle">
                    <img src={delivery} />
                </div>
            </Link>
            <Link>
                <div className="circle">
                    <img src={discode} />
                </div>
            </Link>
            <Link>
                <div className="circle">
                    <img src={shopbag} />
                </div>
            </Link>
            <Link>
                <div className="circle">
                    <img src={sale} />
                </div>
            </Link>
            <Link>
                <div className="circle">
                    <img src={gift} />
                </div>
            </Link>
        </ul>
    </div>
  )
}

export default Category