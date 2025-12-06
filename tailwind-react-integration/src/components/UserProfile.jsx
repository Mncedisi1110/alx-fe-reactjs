function UserProfile() {
  return (
    <div class="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 sm:max-w-xs md:p-8 md:max-w-sm" className="user-profile">
      <img class="rounded-full sm:w-24 sm:h24 md:w-36 md:h-36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
      <h1 class="text-xl text-blue-800 my-4 sm:text-lg md:text-xl">John Doe</h1>
      <p class="text-gray-600 md:text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;