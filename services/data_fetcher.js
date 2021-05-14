// url = 'https://...'

// export async function getToken(){
//     url = `https://...`;
//     code = axios.get(url);
//     refresh_url = `https://...`;
//     response = axios.get();
//         return {}
//     } else {
//         // Throw error
//     }
// }

// export async function fetchStudentList(){
//     response = axios.get(url);
//     return response.data.student_list;
// }

// export async function studentDetailHandler(){
//     response = axios.get(url);
//     return {
//       name: response.data.name,
//       classCode: response.data.classCode,
//       instructor: response.data.instructor,
//       status: response.data.status // How will we determine whether we need a button or not? - Karlo/Ben
//     }
// }

// export async function scheduleStudentHandler(data){
//     const response = await axios.post(url, data);
//     console.log(response.data)
//     return response.data
// }

// export function startWhiteboardHandler(data){
//     // How do we change which page is rendered here (what variable do I need to make to pass into props maybe)? Karlo/Ben
// }

// export async function submitWhiteboardHandler(data){
//     const grading_rubric = {
//         student: {
//             student_id: '',
//             first_name: '',
//             last_name: '',
//             class_code: '',
//             passed_wb: '',
//             scheduled: '',
//             attempts: '',
//             email: '',
//             class_hist: ''
//         },
//         instructor: {
//             instructor_id: '',
//             instructor_name: ''
//         },
//         interviewer_key: '',
//         problem_domain_url: '',
//         category_notes: {
//             interpretation: '',
//             solved_technical: '',
//             analyzed_solution: '',
//             communication: ''
//         },
//         score: {
//             crit_1: '',
//             crit_2: '',
//             crit_3: '',
//             crit_4: '',
//             crit_5: '',
//             crit_6: '',
//             crit_7: '',
//             crit_8: '',
//             crit_9: '',
//             crit_10: '',
//             crit_11: '',
//             crit_12: '',
//             crit_13: '',
//             crit_14: '',
//             crit_15: '',
//             crit_16: '',
//             crit_17: '',
//             total_score: ''
//         },
//         date: '',
//         wb_image: ''
//     }
// }