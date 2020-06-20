export const BASE_URL = "https://api.github.com/users";

export const mapToUser = (data: any): User => {
  return {
    username: data.login,
    avatarUrl: data.avatar_url,
    githubUrl: data.html_url,
    name: data.name,
    reposCount: data.public_repos,
  };
};
