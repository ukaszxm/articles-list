interface Single {
    [key: string | number]: string;
}

interface Locales {
    [key: string]: Single;
}

export const locales: Locales = {
    label: {
        errorMessage: 'Error message',
        login: 'Login',
        email: 'Email',
        password: 'Password',
        showMore: 'Show more',
        save: 'Save',
        delete: 'Delete',
        loadMore: 'Load more',
        filters: 'Filters',
        sortBy: 'Sort by',
        defaultValue: 'Default',
        search: 'Search',
    },
    formErrors: {
        requiredField: 'This field is required',
        invalidEmail: 'Invalid email',
    },
    navigation: {
        articles: 'Articles',
    },
    notifications: {
        500: 'We are currently experiencing server issues. Please try again in a moment.',
        error: 'Something went wrong!',
    },
};
