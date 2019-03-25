module.exports = {
    "extends": "airbnb",
    env:{
        browser:true,
        jest:true,
    },
    rules:{
        indent:['error', 2,{ MemberExpression: 0}], 
        'react/jsx-filename-extension': [1, { 
        extenstions: ['.js','.jsx'],
    }],
    'react/prefer-stateless-function':[{
        ignorePureComponents:true,
    }],
    'react/jsx-one-expression-per-line': false,
    'react/prop-types':[
    'enabled',
    ],
    'react/destructuring-assignment': ['enabled', 'never'],
    "object-shorthand": 1,
    "prefer-destructuring": ["error", {"object": false, "array": false}],
    },
};