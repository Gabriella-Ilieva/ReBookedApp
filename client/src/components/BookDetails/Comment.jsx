




const Comment = () => {
    const { bookId } = useParams();

    const commentSubmitHandler = async (values) => {
        try {
            await commentService.create(values);

        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>New comment</h2>
            <Formik
                initialValues={{
                    bookId: bookId,
                    comment: '',
                }}
                validationSchema={Yup.object().shape(commentValidations)}
                onSubmit={(values, { setSubmitting }) => {
                    commentSubmitHandler(values)
                    setSubmitting(false);
                }}
            >
                <Form className={styles.form}>

                    <MyTextInput
                        label="Comment"
                        name="comment"
                        type="textarea"
                        placeholder="Comment"
                    />
            
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Formik>
        </div>
    );
}

export default Comment