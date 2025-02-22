import * as React from 'react';

interface EmailTemplateProps {
    fullName: string;
}

export const CustomerEmail: React.FC<Readonly<EmailTemplateProps>> = ({
    fullName,
}) => (
    <div>
        <h1>Welcome, {fullName}!</h1>
    </div>
);