import type { UserProps } from "@/interfaces";

const UserProps: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company}) => {
    return(
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">

      <div className="mb-4 border-b pb-3 border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-1">{name}</h2>
        <p className="text-lg text-indigo-600 font-medium">@{username}</p>
      </div>


      <div className="space-y-3 text-gray-700">
        <p className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <a href={`mailto:${email}`} className="hover:underline text-blue-600">{email}</a>
        </p>
        <p className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM11.72 15H4v-7.72l8.293-8.293a1 1 0 011.414 0L17 5.586a1 1 0 010 1.414L11.72 15z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1  0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <a href={`tel:${phone}`} className="hover:underline text-blue-600">{phone}</a>
        </p>
        <p className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3.293 3.293A2 2 0 0110 10.172V6a2 2 0 00-2-2H4a2 2 0 00-2 2v4a2 2 0 002 2h3.172l3.293 3.293a2 2 0 11-2.828 2.828L3 13.828V16a2 2 0 002 2h4a2 2 0 002-2v-3.172l3.293-3.293A2 2 0 0016 9V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v3.172z" clipRule="evenodd"></path>
          </svg>
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">{website}</a>
        </p>
      </div>


      <div className="mt-4 pt-4 border-t border-gray-200 text-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Address:</h3>
        <p>{address.street}, {address.suite}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>


      <div className="mt-4 pt-4 border-t border-gray-200 text-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Company:</h3>
        <p className="font-medium text-gray-800">{company.name}</p>
        <p className="text-sm italic text-gray-600">&quot;{company.catchPhrase}&quot;</p>
        <p className="text-sm text-gray-500">{company.bs}</p>
      </div>


      <div className="mt-6 pt-4 border-t border-gray-200 text-right text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
    );
};

export default UserProps;
