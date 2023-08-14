import { boot } from 'quasar/wrappers';
import CKEditor from '@ckeditor/ckeditor5-vue';
export default boot(({ app }) => {
   app.use(CKEditor);
});
