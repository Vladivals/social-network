import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength5 = maxLengthCreator(5);

const addMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
             component={Textarea}
             validate={[required, maxLength5 ]}
             placeholder='Enter your message' 
             name="newMessageBody"
          />
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    );
  };
  
 export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(addMessageForm)