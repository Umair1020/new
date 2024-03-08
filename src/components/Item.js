import React from 'react'
import { motion } from 'framer-motion'
import './Item.css'
function Item({ icon, name }) {

    const subheading = {
        true: {
            opacity: 1
        },
        false: {
            opacity: 0,
            display: 'none'
        }
    }
    return (
        <motion.div className='item'

            transition={{
                type: 'none', duration: 0.1
            }}
        >
            <motion.div className='icon'>
                {icon}
            </motion.div>
            <motion.span
                variants={subheading}
                className='span'
            >
                {name}
            </motion.span>
        </motion.div>
    )
}

export default Item