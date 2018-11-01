import uuid from 'uuid';

// Typy akcji
export const ADD_COMMENT = 'ADD_COMMENT'; //Tworzenie komentarza
export const REMOVE_COMMENT = 'REMOVE_COMMENT'; //usuwanie komentarza
export const EDIT_COMMENT = 'EDIT_COMMENT'; // edycja komentarza
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'; //like
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'; //unlike


// Kreatory akcji
export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

export function thumbUpComment(id) {
    return{
        type: THUMB_UP_COMMENT,
        id
    }
}

export function thumbDownComment(id) {
    return{
        type: THUMB_DOWN_COMMENT,
        id
    }
}