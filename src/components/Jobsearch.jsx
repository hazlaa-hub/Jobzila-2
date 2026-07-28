const Jobsearch = () => {
    return (
        <main>
            <section className="contact-section">
                <h2>Job Search</h2>
                <div className="contact">
                    <form action="" className="contact-form">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="keyword"
                        />
                        <input
                            type="text"
                            id="location"
                            name="location"
                            required
                            placeholder="location"
                        />
                        <select name="" id="">
                            <option value="0">All Categories</option>
                            <option value="1">IT</option>
                            <option value="2">Finance</option>
                            <option value="3">Billing</option>
                            <option value="4">Marketing</option>
                        </select>
                        <input type="submit" value="search-job" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Jobsearch;