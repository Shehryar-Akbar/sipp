'use client';
import React from 'react'
import styles from './style.module.css';

export default function index({index, title, setModal, description}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h3>{title}</h3>
            <p className='text-xl! border-2 border-b-blue-700 py-4! px-8! rounded-full max-sm:hidden!'>{description}</p>
        </div>
    )
}
