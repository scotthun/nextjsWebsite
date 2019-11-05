import Layout from '../resources/components/MyLayout.js'
import MyForm from '../resources/components/contact_form.js'

export default function Homepage() {
    return (
        <Layout>
            <MyForm />
            <style jsx>
                {
                    `
                    p{
                        margin-top: 50px;
                        margin-right: 50px;
                        margin-bottom: 50px;
                        margin-left: 50px;
                    }

                `
                }

            </style>
        </Layout>

       
    )
}
