export const BASE_URL = 'https://api.github.com/users';

export const mapToUser = (data: any): User => {
  return {
    avatarUrl: data.avatar_url,
    githubUrl: data.html_url,
    name: data.name,
    reposCount: data.public_repos,
    username: data.login,
  };
};
