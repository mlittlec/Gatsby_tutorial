import React from 'react'
import Title from '../Title'
import styles from '../../css/contact.module.css'


const Contact = () => {
    return (
        <section className={styles.Contact}>
            <Title title="Contact" subtitle="Us" />
            <div className={styles.center}>
                <form className={styles.form}>
                    <div>
                        <label htmlFor="Name">Name : </label>
                        <input 
                          type="text" 
                          name="Name" 
                          id="name"className={styles.formControl} 
                          placeholder="John Smith" />
                    </div>
                    < div>
                        <label htmlFor="EmailAddress">Email address :</label>
                        <input 
                            type = "email"
                            name = "Email"
                            id = "Email"
                            className = {styles.formControl}
                            placeholder = "email@email.co.uk" />
                    </div> 
                    <div>
                        <label htmlFor="MessageBody">Message Body :</label>
                        <textarea 
                            name = "Message"
                            id = "Message"
                            rows = "10"
                            className = {styles.formControl}
                            placeholder = "Enter message here" />
                    </div>
                    <div>
                        <input type="submit" value="Submit Now" className={styles.submit} />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
