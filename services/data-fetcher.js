function getToken(){
    url = `https://slack.com/oauth/v2/authorize?user_scope=identity.basic,identity.email,identity.avatar&client_id=${ client_id }`;
    code = axios.get(url);
    refresh_url = `https://slack.com/api/oauth.v2.access?client_id=${ process.env.CLIENT_ID }&client_secret=${ process.env.CLIENT_SECRET }&code={ code }`;
    response = axios.get(refresh_url);
    if (response.ok === True) {
        user = response.user
        return {
            user_id: user.id,
            scope: user.scope,
            token: user.access_token
        }
    } else {
        // Throw error
    }
}

function fetchStudentList(){
    url = "https://...";
    response = axios.get(url);
    return response.[...].student_list;
}

function studentDetailHandler(){
    url = "https://...";
    response = axios.get(url);
    return {
      name: response.[...].name,
      classCode: response.[...].classCode,
      instructor: response.[...].instructor,
      status: response.[...].status // How will we determine whether we need a button or not? - Karlo/Ben
    }
}

function scheduleStudentHandler(data){
    url = "https://...";
    response.post(url, data);
    // What happens here? What happens in the backend? - Mason
}

function startWhiteboardHandler(data){
    // How do we change which page is rendered here (what variable do I need to make to pass into props maybe)? Karlo/Ben
}