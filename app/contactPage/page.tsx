 
 
export default function ContactPage() {
    return (
        <div>
                <h1>Contact Us</h1>
            <form>
                <fieldset>
                    <legend>Your Details</legend>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        id="input"
                        required
                    />
                    <br /><br />
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        id="input"
                        required
                    />
                </fieldset>

                <fieldset>
                    <legend>Your Review</legend>
                    <label htmlFor="how hear about us">How did you hear about us?</label>
                    <select id="input" required>
                        <option value="google">Google</option>
                        <option value="facebook">Facebook</option>
                        <option value="other">Other</option>
                    </select>
                    <br /><br />

                    <label htmlFor="visit">Would you visit again?</label>
                    <br />
                    <input type="radio" name="visit" id="radio"/>
                    <label htmlFor="yes">Yes</label>
                    <input type="radio" name="visit" id="radio"/>
                    <label htmlFor="no">No</label>
                    <input type="radio" name="visit" id="radio"/>
                    <label htmlFor="maybe">Maybe</label>
                    <br /><br />
                    <label htmlFor="comments">Comments:</label>
                    <br />
                    <textarea placeholder="Enter your comments" id="input"></textarea>
                    <br /><br />

                    <input type="checkbox" id="signup" />
                    <label htmlFor="signup">Sign me up for email updates</label>
                    <br />
                </fieldset>

                <button type="submit">submit Review</button>
            </form>
            <h1>Our Location</h1>

    <iframe
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57904.22728152133!2d67.13455341073812!3d24.897497086959422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339c72ec76665%3A0xec5d1d821453c988!2sJinnah%20International%20Airport!5e0!3m2!1sen!2s!4v1729449078561!5m2!1sen!2s
     &amp;output=embed"
     width="900"
     height="500"
     title="Google Map"
     id="googlemap"
    ></iframe>
    </div>
            
    );
}
