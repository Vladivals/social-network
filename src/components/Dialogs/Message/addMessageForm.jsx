import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import Button from "../../Button/Button";
import style from "../Dialogs.module.css";

const maxLength5 = maxLengthCreator(5);

const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.addMessageForm}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength5]}
          placeholder='Enter your message'
          name="newMessageBody"
        />
      </div>
      <div className={style.addMessageFormFooter}>
        <Button label="Send" />
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(addMessageForm)