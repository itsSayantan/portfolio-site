import React from 'react';

import { AppContext } from '@Shared/contexts/AppContext';
import { ProjectsDataPropsType, ProjectsPropsType } from '@Shared/types/props';
import { AppContextType } from '@Shared/types/others';

import './Projects.scss';

import MainLayout from '@Components/MainLayout/MainLayout';
import PageTitle from '@Components/PageTitle/PageTitle';
import ContentLoadingIndicator from '@Components/shared/ContentLoadingIndicator/ContentLoadingIndicator';

const staticJson: any = {
    repoDetails: [
        {
            id: 161451310,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNjE0NTEzMTA=',
            name: 'billing-utility',
            full_name: 'itsSayantan/billing-utility',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/billing-utility',
            description:
                'A billing utility made using React.JS and Electron.JS',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/billing-utility',
            forks_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/billing-utility/deployments',
            created_at: '2018-12-12T07:46:07Z',
            updated_at: '2019-01-13T09:30:36Z',
            pushed_at: '2019-01-13T09:30:35Z',
            git_url: 'git://github.com/itsSayantan/billing-utility.git',
            ssh_url: 'git@github.com:itsSayantan/billing-utility.git',
            clone_url: 'https://github.com/itsSayantan/billing-utility.git',
            svn_url: 'https://github.com/itsSayantan/billing-utility',
            homepage: null,
            size: 1622,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 1,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 1,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 234855120,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMzQ4NTUxMjA=',
            name: 'boilerplatter',
            full_name: 'itsSayantan/boilerplatter',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/boilerplatter',
            description: 'A CLI to create boilerplates.',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/boilerplatter',
            forks_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter/deployments',
            created_at: '2020-01-19T06:55:52Z',
            updated_at: '2020-01-27T16:23:03Z',
            pushed_at: '2020-01-27T16:23:01Z',
            git_url: 'git://github.com/itsSayantan/boilerplatter.git',
            ssh_url: 'git@github.com:itsSayantan/boilerplatter.git',
            clone_url: 'https://github.com/itsSayantan/boilerplatter.git',
            svn_url: 'https://github.com/itsSayantan/boilerplatter',
            homepage: null,
            size: 7,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 235509750,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMzU1MDk3NTA=',
            name: 'boilerplatter-react-typescript-splitchunks-starter',
            full_name:
                'itsSayantan/boilerplatter-react-typescript-splitchunks-starter',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url:
                'https://github.com/itsSayantan/boilerplatter-react-typescript-splitchunks-starter',
            description:
                'A basic boilerplate to get started with React.JS and Typescript. This project includes the SplitChunksPlugin implementation. Additional features include @babel/plugin-proposal-optional-chaining.',
            fork: false,
            url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter',
            forks_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-splitchunks-starter/deployments',
            created_at: '2020-01-22T06:04:44Z',
            updated_at: '2020-01-27T07:09:39Z',
            pushed_at: '2020-01-27T07:09:36Z',
            git_url:
                'git://github.com/itsSayantan/boilerplatter-react-typescript-splitchunks-starter.git',
            ssh_url:
                'git@github.com:itsSayantan/boilerplatter-react-typescript-splitchunks-starter.git',
            clone_url:
                'https://github.com/itsSayantan/boilerplatter-react-typescript-splitchunks-starter.git',
            svn_url:
                'https://github.com/itsSayantan/boilerplatter-react-typescript-splitchunks-starter',
            homepage: '',
            size: 365,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 234853511,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMzQ4NTM1MTE=',
            name: 'boilerplatter-react-typescript-starter',
            full_name: 'itsSayantan/boilerplatter-react-typescript-starter',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url:
                'https://github.com/itsSayantan/boilerplatter-react-typescript-starter',
            description:
                'A basic boilerplate to get started with React.JS and Typescript. Additional features include @babel/plugin-proposal-optional-chaining.',
            fork: false,
            url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter',
            forks_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/boilerplatter-react-typescript-starter/deployments',
            created_at: '2020-01-19T06:42:19Z',
            updated_at: '2020-01-27T07:53:36Z',
            pushed_at: '2020-01-27T07:53:34Z',
            git_url:
                'git://github.com/itsSayantan/boilerplatter-react-typescript-starter.git',
            ssh_url:
                'git@github.com:itsSayantan/boilerplatter-react-typescript-starter.git',
            clone_url:
                'https://github.com/itsSayantan/boilerplatter-react-typescript-starter.git',
            svn_url:
                'https://github.com/itsSayantan/boilerplatter-react-typescript-starter',
            homepage: null,
            size: 125,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 54364521,
            node_id: 'MDEwOlJlcG9zaXRvcnk1NDM2NDUyMQ==',
            name: 'boxtap',
            full_name: 'itsSayantan/boxtap',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/boxtap',
            description:
                'Boxtap is a HTML5 canvas game. In this game a player has to tap the boxes that will appear every 800 milliseconds. If a user can successfully tap a box, he/she scores but if the player taps the white background by mistake, he/she loses the game',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/boxtap',
            forks_url: 'https://api.github.com/repos/itsSayantan/boxtap/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/boxtap/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/boxtap/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/itsSayantan/boxtap/teams',
            hooks_url: 'https://api.github.com/repos/itsSayantan/boxtap/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/boxtap/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/boxtap/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/boxtap/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/boxtap/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/boxtap/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/boxtap/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/boxtap/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/boxtap/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/boxtap/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/boxtap/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/boxtap/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/boxtap/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/boxtap/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/boxtap/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/boxtap/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/boxtap/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/boxtap/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/boxtap/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/boxtap/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/boxtap/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/boxtap/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/boxtap/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/boxtap/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/boxtap/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/boxtap/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/boxtap/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/boxtap/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/boxtap/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/boxtap/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/boxtap/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/boxtap/deployments',
            created_at: '2016-03-21T06:17:29Z',
            updated_at: '2016-04-03T03:57:15Z',
            pushed_at: '2016-08-10T10:25:39Z',
            git_url: 'git://github.com/itsSayantan/boxtap.git',
            ssh_url: 'git@github.com:itsSayantan/boxtap.git',
            clone_url: 'https://github.com/itsSayantan/boxtap.git',
            svn_url: 'https://github.com/itsSayantan/boxtap',
            homepage: 'https://itsSayantan.github.io/boxtap',
            size: 40,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 196165839,
            node_id: 'MDEwOlJlcG9zaXRvcnkxOTYxNjU4Mzk=',
            name: 'chatcli',
            full_name: 'itsSayantan/chatcli',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/chatcli',
            description:
                "chatcli client application. chatcli is a simple CLI application for chatting purposes. This application does not store any messages or user data. This is application is useful for temporary chat setups and when the users know the other user's chatcli ID.",
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/chatcli',
            forks_url: 'https://api.github.com/repos/itsSayantan/chatcli/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/chatcli/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/chatcli/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/itsSayantan/chatcli/teams',
            hooks_url: 'https://api.github.com/repos/itsSayantan/chatcli/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/chatcli/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/chatcli/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/chatcli/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/chatcli/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/chatcli/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/chatcli/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/chatcli/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/chatcli/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/chatcli/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/chatcli/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/chatcli/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/chatcli/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/chatcli/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/chatcli/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/chatcli/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/chatcli/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/chatcli/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/chatcli/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/chatcli/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/chatcli/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/chatcli/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/chatcli/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/chatcli/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/chatcli/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/chatcli/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/chatcli/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/chatcli/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/chatcli/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/chatcli/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/chatcli/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/chatcli/deployments',
            created_at: '2019-07-10T08:33:02Z',
            updated_at: '2019-08-24T13:54:52Z',
            pushed_at: '2019-08-25T13:46:44Z',
            git_url: 'git://github.com/itsSayantan/chatcli.git',
            ssh_url: 'git@github.com:itsSayantan/chatcli.git',
            clone_url: 'https://github.com/itsSayantan/chatcli.git',
            svn_url: 'https://github.com/itsSayantan/chatcli',
            homepage: '',
            size: 39,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 83957058,
            node_id: 'MDEwOlJlcG9zaXRvcnk4Mzk1NzA1OA==',
            name: 'coder-dashboard',
            full_name: 'itsSayantan/coder-dashboard',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/coder-dashboard',
            description: 'Homepage for the coding chapter',
            fork: true,
            url: 'https://api.github.com/repos/itsSayantan/coder-dashboard',
            forks_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/coder-dashboard/deployments',
            created_at: '2017-03-05T08:52:03Z',
            updated_at: '2017-03-09T11:52:25Z',
            pushed_at: '2017-03-09T11:52:24Z',
            git_url: 'git://github.com/itsSayantan/coder-dashboard.git',
            ssh_url: 'git@github.com:itsSayantan/coder-dashboard.git',
            clone_url: 'https://github.com/itsSayantan/coder-dashboard.git',
            svn_url: 'https://github.com/itsSayantan/coder-dashboard',
            homepage: null,
            size: 87,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'gpl-3.0',
                name: 'GNU General Public License v3.0',
                spdx_id: 'GPL-3.0',
                url: 'https://api.github.com/licenses/gpl-3.0',
                node_id: 'MDc6TGljZW5zZTk='
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 216365428,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMTYzNjU0Mjg=',
            name: 'custom-error-boundary',
            full_name: 'itsSayantan/custom-error-boundary',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/custom-error-boundary',
            description:
                'Custom error boundary component for react.js applications.',
            fork: false,
            url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary',
            forks_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/custom-error-boundary/deployments',
            created_at: '2019-10-20T13:22:12Z',
            updated_at: '2019-12-08T17:19:14Z',
            pushed_at: '2019-12-08T17:19:12Z',
            git_url: 'git://github.com/itsSayantan/custom-error-boundary.git',
            ssh_url: 'git@github.com:itsSayantan/custom-error-boundary.git',
            clone_url:
                'https://github.com/itsSayantan/custom-error-boundary.git',
            svn_url: 'https://github.com/itsSayantan/custom-error-boundary',
            homepage: null,
            size: 323,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 53634835,
            node_id: 'MDEwOlJlcG9zaXRvcnk1MzYzNDgzNQ==',
            name: 'DesignV1',
            full_name: 'itsSayantan/DesignV1',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/DesignV1',
            description:
                'This is a tool that helps web designers to create html designs faster without having to write code.',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/DesignV1',
            forks_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/DesignV1/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/DesignV1/deployments',
            created_at: '2016-03-11T02:55:30Z',
            updated_at: '2016-05-24T03:17:12Z',
            pushed_at: '2016-08-10T10:19:36Z',
            git_url: 'git://github.com/itsSayantan/DesignV1.git',
            ssh_url: 'git@github.com:itsSayantan/DesignV1.git',
            clone_url: 'https://github.com/itsSayantan/DesignV1.git',
            svn_url: 'https://github.com/itsSayantan/DesignV1',
            homepage: 'http://designv1.16mb.com/Design',
            size: 47,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'PHP',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 86657294,
            node_id: 'MDEwOlJlcG9zaXRvcnk4NjY1NzI5NA==',
            name: 'dodger',
            full_name: 'itsSayantan/dodger',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/dodger',
            description:
                'Dodger is a HTML5 canvas game made using createjs. The idea behind the game is very basic, a user has to dodge obstacles that comes along his/her way. The game contains keyboard controls for PC users and in-game buttons for other form factors.',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/dodger',
            forks_url: 'https://api.github.com/repos/itsSayantan/dodger/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/dodger/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/dodger/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/itsSayantan/dodger/teams',
            hooks_url: 'https://api.github.com/repos/itsSayantan/dodger/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/dodger/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/dodger/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/dodger/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/dodger/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/dodger/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/dodger/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/dodger/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/dodger/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/dodger/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/dodger/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/dodger/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/dodger/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/dodger/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/dodger/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/dodger/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/dodger/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/dodger/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/dodger/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/dodger/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/dodger/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/dodger/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/dodger/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/dodger/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/dodger/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/dodger/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/dodger/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/dodger/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/dodger/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/dodger/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/dodger/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/dodger/deployments',
            created_at: '2017-03-30T04:01:11Z',
            updated_at: '2017-03-30T04:40:38Z',
            pushed_at: '2017-04-03T05:43:29Z',
            git_url: 'git://github.com/itsSayantan/dodger.git',
            ssh_url: 'git@github.com:itsSayantan/dodger.git',
            clone_url: 'https://github.com/itsSayantan/dodger.git',
            svn_url: 'https://github.com/itsSayantan/dodger',
            homepage: 'https://itssayantan.github.io/dodger',
            size: 13,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 153979147,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNTM5NzkxNDc=',
            name: 'json-inspector',
            full_name: 'itsSayantan/json-inspector',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/json-inspector',
            description:
                'A JSON viewer and diff checker made using Electron JS and Angular 7',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/json-inspector',
            forks_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/json-inspector/deployments',
            created_at: '2018-10-21T06:15:20Z',
            updated_at: '2018-11-28T05:47:26Z',
            pushed_at: '2018-11-28T05:47:25Z',
            git_url: 'git://github.com/itsSayantan/json-inspector.git',
            ssh_url: 'git@github.com:itsSayantan/json-inspector.git',
            clone_url: 'https://github.com/itsSayantan/json-inspector.git',
            svn_url: 'https://github.com/itsSayantan/json-inspector',
            homepage: '',
            size: 397,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 1,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 152728100,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNTI3MjgxMDA=',
            name: 'kmpcli',
            full_name: 'itsSayantan/kmpcli',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/kmpcli',
            description:
                'A CLI that searches for text inside files, based on KMP algorithm',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/kmpcli',
            forks_url: 'https://api.github.com/repos/itsSayantan/kmpcli/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/itsSayantan/kmpcli/teams',
            hooks_url: 'https://api.github.com/repos/itsSayantan/kmpcli/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/kmpcli/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/kmpcli/deployments',
            created_at: '2018-10-12T09:36:18Z',
            updated_at: '2019-07-20T19:29:22Z',
            pushed_at: '2019-07-20T19:29:20Z',
            git_url: 'git://github.com/itsSayantan/kmpcli.git',
            ssh_url: 'git@github.com:itsSayantan/kmpcli.git',
            clone_url: 'https://github.com/itsSayantan/kmpcli.git',
            svn_url: 'https://github.com/itsSayantan/kmpcli',
            homepage: '',
            size: 19,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 230561106,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMzA1NjExMDY=',
            name: 'news-reader',
            full_name: 'itsSayantan/news-reader',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/news-reader',
            description:
                'A news reader application which makes use of the intersection observer web api.',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/news-reader',
            forks_url:
                'https://api.github.com/repos/itsSayantan/news-reader/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/news-reader/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/news-reader/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/news-reader/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/news-reader/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/news-reader/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/news-reader/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/news-reader/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/news-reader/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/news-reader/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/news-reader/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/news-reader/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/news-reader/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/news-reader/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/news-reader/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/news-reader/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/news-reader/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/news-reader/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/news-reader/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/news-reader/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/news-reader/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/news-reader/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/news-reader/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/news-reader/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/news-reader/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/news-reader/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/news-reader/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/news-reader/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/news-reader/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/news-reader/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/news-reader/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/news-reader/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/news-reader/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/news-reader/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/news-reader/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/news-reader/deployments',
            created_at: '2019-12-28T05:05:31Z',
            updated_at: '2020-01-06T10:51:11Z',
            pushed_at: '2020-01-06T10:51:09Z',
            git_url: 'git://github.com/itsSayantan/news-reader.git',
            ssh_url: 'git@github.com:itsSayantan/news-reader.git',
            clone_url: 'https://github.com/itsSayantan/news-reader.git',
            svn_url: 'https://github.com/itsSayantan/news-reader',
            homepage: null,
            size: 127,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 156531638,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNTY1MzE2Mzg=',
            name: 'nodejs-masterclass-hello',
            full_name: 'itsSayantan/nodejs-masterclass-hello',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/nodejs-masterclass-hello',
            description: 'Homework Assignment 1',
            fork: false,
            url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello',
            forks_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/nodejs-masterclass-hello/deployments',
            created_at: '2018-11-07T10:45:28Z',
            updated_at: '2018-11-07T12:40:57Z',
            pushed_at: '2018-11-07T12:40:56Z',
            git_url:
                'git://github.com/itsSayantan/nodejs-masterclass-hello.git',
            ssh_url: 'git@github.com:itsSayantan/nodejs-masterclass-hello.git',
            clone_url:
                'https://github.com/itsSayantan/nodejs-masterclass-hello.git',
            svn_url: 'https://github.com/itsSayantan/nodejs-masterclass-hello',
            homepage: null,
            size: 3,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 198952644,
            node_id: 'MDEwOlJlcG9zaXRvcnkxOTg5NTI2NDQ=',
            name: 'npm-expansions',
            full_name: 'itsSayantan/npm-expansions',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/npm-expansions',
            description: 'Send us a pull request by editing expansions.txt',
            fork: true,
            url: 'https://api.github.com/repos/itsSayantan/npm-expansions',
            forks_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/npm-expansions/deployments',
            created_at: '2019-07-26T05:34:03Z',
            updated_at: '2019-07-26T05:36:20Z',
            pushed_at: '2019-07-26T05:36:16Z',
            git_url: 'git://github.com/itsSayantan/npm-expansions.git',
            ssh_url: 'git@github.com:itsSayantan/npm-expansions.git',
            clone_url: 'https://github.com/itsSayantan/npm-expansions.git',
            svn_url: 'https://github.com/itsSayantan/npm-expansions',
            homepage: 'http://npm.im/npm-expansions',
            size: 798,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 62880985,
            node_id: 'MDEwOlJlcG9zaXRvcnk2Mjg4MDk4NQ==',
            name: 'oassist',
            full_name: 'itsSayantan/oassist',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/oassist',
            description: 'Office Assistant Google Chrome Extension',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/oassist',
            forks_url: 'https://api.github.com/repos/itsSayantan/oassist/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/oassist/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/oassist/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/itsSayantan/oassist/teams',
            hooks_url: 'https://api.github.com/repos/itsSayantan/oassist/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/oassist/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/oassist/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/oassist/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/oassist/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/oassist/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/oassist/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/oassist/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/oassist/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/oassist/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/oassist/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/oassist/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/oassist/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/oassist/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/oassist/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/oassist/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/oassist/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/oassist/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/oassist/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/oassist/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/oassist/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/oassist/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/oassist/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/oassist/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/oassist/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/oassist/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/oassist/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/oassist/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/oassist/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/oassist/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/oassist/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/oassist/deployments',
            created_at: '2016-07-08T10:31:39Z',
            updated_at: '2016-07-08T10:43:22Z',
            pushed_at: '2016-12-22T05:00:26Z',
            git_url: 'git://github.com/itsSayantan/oassist.git',
            ssh_url: 'git@github.com:itsSayantan/oassist.git',
            clone_url: 'https://github.com/itsSayantan/oassist.git',
            svn_url: 'https://github.com/itsSayantan/oassist',
            homepage: null,
            size: 596,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 236278056,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMzYyNzgwNTY=',
            name: 'portfolio-site',
            full_name: 'itsSayantan/portfolio-site',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/portfolio-site',
            description: 'My personal portfolio website.',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/portfolio-site',
            forks_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/portfolio-site/deployments',
            created_at: '2020-01-26T06:55:11Z',
            updated_at: '2020-02-17T06:40:13Z',
            pushed_at: '2020-02-17T06:40:10Z',
            git_url: 'git://github.com/itsSayantan/portfolio-site.git',
            ssh_url: 'git@github.com:itsSayantan/portfolio-site.git',
            clone_url: 'https://github.com/itsSayantan/portfolio-site.git',
            svn_url: 'https://github.com/itsSayantan/portfolio-site',
            homepage: '',
            size: 204,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 171424999,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNzE0MjQ5OTk=',
            name: 'proxy-wrappers',
            full_name: 'itsSayantan/proxy-wrappers',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/proxy-wrappers',
            description: 'A library of proxy wrappers built with javascript',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/proxy-wrappers',
            forks_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/proxy-wrappers/deployments',
            created_at: '2019-02-19T07:17:53Z',
            updated_at: '2019-07-26T06:43:30Z',
            pushed_at: '2019-02-20T07:19:31Z',
            git_url: 'git://github.com/itsSayantan/proxy-wrappers.git',
            ssh_url: 'git@github.com:itsSayantan/proxy-wrappers.git',
            clone_url: 'https://github.com/itsSayantan/proxy-wrappers.git',
            svn_url: 'https://github.com/itsSayantan/proxy-wrappers',
            homepage: null,
            size: 4,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 161973706,
            node_id: 'MDEwOlJlcG9zaXRvcnkxNjE5NzM3MDY=',
            name: 'react-electron-starter',
            full_name: 'itsSayantan/react-electron-starter',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/react-electron-starter',
            description:
                'A starting point if you are creating a React.JS application using create-react-app and Electron.JS',
            fork: false,
            url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter',
            forks_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/react-electron-starter/deployments',
            created_at: '2018-12-16T06:17:49Z',
            updated_at: '2018-12-20T04:01:08Z',
            pushed_at: '2018-12-20T04:01:07Z',
            git_url: 'git://github.com/itsSayantan/react-electron-starter.git',
            ssh_url: 'git@github.com:itsSayantan/react-electron-starter.git',
            clone_url:
                'https://github.com/itsSayantan/react-electron-starter.git',
            svn_url: 'https://github.com/itsSayantan/react-electron-starter',
            homepage: null,
            size: 155,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 219259017,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMTkyNTkwMTc=',
            name: 'react-wizard-stepper',
            full_name: 'itsSayantan/react-wizard-stepper',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/react-wizard-stepper',
            description:
                'A wizard component in react which has stepper functionality.',
            fork: false,
            url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper',
            forks_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/react-wizard-stepper/deployments',
            created_at: '2019-11-03T06:04:45Z',
            updated_at: '2019-11-03T14:02:45Z',
            pushed_at: '2019-11-03T14:02:43Z',
            git_url: 'git://github.com/itsSayantan/react-wizard-stepper.git',
            ssh_url: 'git@github.com:itsSayantan/react-wizard-stepper.git',
            clone_url:
                'https://github.com/itsSayantan/react-wizard-stepper.git',
            svn_url: 'https://github.com/itsSayantan/react-wizard-stepper',
            homepage: null,
            size: 185,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 1,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 204858244,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMDQ4NTgyNDQ=',
            name: 'style-terminal',
            full_name: 'itsSayantan/style-terminal',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/style-terminal',
            description:
                'style-terminal is a simple library for Node.JS to add style to the terminal.',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/style-terminal',
            forks_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/style-terminal/deployments',
            created_at: '2019-08-28T05:53:33Z',
            updated_at: '2019-09-04T06:23:01Z',
            pushed_at: '2019-10-10T04:53:27Z',
            git_url: 'git://github.com/itsSayantan/style-terminal.git',
            ssh_url: 'git@github.com:itsSayantan/style-terminal.git',
            clone_url: 'https://github.com/itsSayantan/style-terminal.git',
            svn_url: 'https://github.com/itsSayantan/style-terminal',
            homepage: null,
            size: 36,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 198356630,
            node_id: 'MDEwOlJlcG9zaXRvcnkxOTgzNTY2MzA=',
            name: 'terminal-bigtext-generator',
            full_name: 'itsSayantan/terminal-bigtext-generator',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url:
                'https://github.com/itsSayantan/terminal-bigtext-generator',
            description:
                'console-bigtext-generator is a simple library which allows users to generate Big Texts on the console. This library can be used for making application banners in the terminal.',
            fork: false,
            url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator',
            forks_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/terminal-bigtext-generator/deployments',
            created_at: '2019-07-23T05:14:35Z',
            updated_at: '2019-08-16T10:47:31Z',
            pushed_at: '2019-08-16T10:47:29Z',
            git_url:
                'git://github.com/itsSayantan/terminal-bigtext-generator.git',
            ssh_url:
                'git@github.com:itsSayantan/terminal-bigtext-generator.git',
            clone_url:
                'https://github.com/itsSayantan/terminal-bigtext-generator.git',
            svn_url:
                'https://github.com/itsSayantan/terminal-bigtext-generator',
            homepage: null,
            size: 20,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 204428452,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMDQ0Mjg0NTI=',
            name: 'ts-state',
            full_name: 'itsSayantan/ts-state',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/ts-state',
            description:
                'A simple global state management system built with Typescript.',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/ts-state',
            forks_url:
                'https://api.github.com/repos/itsSayantan/ts-state/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/ts-state/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/ts-state/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/ts-state/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/ts-state/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/ts-state/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/ts-state/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/ts-state/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/ts-state/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/ts-state/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/ts-state/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/ts-state/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/ts-state/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/ts-state/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/ts-state/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/ts-state/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/ts-state/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/ts-state/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/ts-state/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/ts-state/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/ts-state/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/ts-state/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/ts-state/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/ts-state/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/ts-state/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/ts-state/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/ts-state/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/ts-state/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/ts-state/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/ts-state/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/ts-state/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/ts-state/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/ts-state/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/ts-state/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/ts-state/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/ts-state/deployments',
            created_at: '2019-08-26T08:14:49Z',
            updated_at: '2019-08-26T12:43:26Z',
            pushed_at: '2019-08-26T12:43:24Z',
            git_url: 'git://github.com/itsSayantan/ts-state.git',
            ssh_url: 'git@github.com:itsSayantan/ts-state.git',
            clone_url: 'https://github.com/itsSayantan/ts-state.git',
            svn_url: 'https://github.com/itsSayantan/ts-state',
            homepage: '',
            size: 6,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 64720989,
            node_id: 'MDEwOlJlcG9zaXRvcnk2NDcyMDk4OQ==',
            name: 'volchat',
            full_name: 'itsSayantan/volchat',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/volchat',
            description:
                'VolChat is a simple chat application which uses node.js. This chat application can be easily implemented. This chat application does not store messages.',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/volchat',
            forks_url: 'https://api.github.com/repos/itsSayantan/volchat/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/volchat/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/volchat/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/itsSayantan/volchat/teams',
            hooks_url: 'https://api.github.com/repos/itsSayantan/volchat/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/volchat/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/volchat/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/volchat/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/volchat/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/volchat/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/volchat/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/volchat/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/volchat/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/volchat/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/volchat/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/volchat/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/volchat/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/volchat/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/volchat/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/volchat/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/volchat/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/volchat/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/volchat/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/volchat/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/volchat/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/volchat/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/volchat/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/volchat/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/volchat/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/volchat/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/volchat/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/volchat/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/volchat/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/volchat/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/volchat/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/volchat/deployments',
            created_at: '2016-08-02T03:26:29Z',
            updated_at: '2016-08-06T12:49:34Z',
            pushed_at: '2016-08-07T05:38:19Z',
            git_url: 'git://github.com/itsSayantan/volchat.git',
            ssh_url: 'git@github.com:itsSayantan/volchat.git',
            clone_url: 'https://github.com/itsSayantan/volchat.git',
            svn_url: 'https://github.com/itsSayantan/volchat',
            homepage: 'https://vol-chat.herokuapp.com',
            size: 31,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 221261084,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMjEyNjEwODQ=',
            name: 'writedown',
            full_name: 'itsSayantan/writedown',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/writedown',
            description: 'A text editor made with React and Electron',
            fork: true,
            url: 'https://api.github.com/repos/itsSayantan/writedown',
            forks_url:
                'https://api.github.com/repos/itsSayantan/writedown/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/writedown/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/writedown/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/writedown/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/writedown/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/writedown/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/writedown/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/writedown/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/writedown/branches{/branch}',
            tags_url: 'https://api.github.com/repos/itsSayantan/writedown/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/writedown/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/writedown/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/writedown/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/writedown/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/writedown/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/writedown/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/writedown/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/writedown/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/writedown/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/writedown/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/writedown/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/writedown/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/writedown/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/writedown/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/writedown/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/writedown/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/writedown/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/writedown/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/writedown/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/writedown/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/writedown/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/writedown/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/writedown/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/writedown/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/writedown/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/writedown/deployments',
            created_at: '2019-11-12T16:21:30Z',
            updated_at: '2019-12-02T18:32:39Z',
            pushed_at: '2019-12-26T14:09:06Z',
            git_url: 'git://github.com/itsSayantan/writedown.git',
            ssh_url: 'git@github.com:itsSayantan/writedown.git',
            clone_url: 'https://github.com/itsSayantan/writedown.git',
            svn_url: 'https://github.com/itsSayantan/writedown',
            homepage: '',
            size: 465,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        },
        {
            id: 222750894,
            node_id: 'MDEwOlJlcG9zaXRvcnkyMjI3NTA4OTQ=',
            name: 'writedown-editor',
            full_name: 'itsSayantan/writedown-editor',
            private: false,
            owner: {
                login: 'itsSayantan',
                id: 6942633,
                node_id: 'MDQ6VXNlcjY5NDI2MzM=',
                avatar_url:
                    'https://avatars3.githubusercontent.com/u/6942633?v=4',
                gravatar_id: '',
                url: 'https://api.github.com/users/itsSayantan',
                html_url: 'https://github.com/itsSayantan',
                followers_url:
                    'https://api.github.com/users/itsSayantan/followers',
                following_url:
                    'https://api.github.com/users/itsSayantan/following{/other_user}',
                gists_url:
                    'https://api.github.com/users/itsSayantan/gists{/gist_id}',
                starred_url:
                    'https://api.github.com/users/itsSayantan/starred{/owner}{/repo}',
                subscriptions_url:
                    'https://api.github.com/users/itsSayantan/subscriptions',
                organizations_url:
                    'https://api.github.com/users/itsSayantan/orgs',
                repos_url: 'https://api.github.com/users/itsSayantan/repos',
                events_url:
                    'https://api.github.com/users/itsSayantan/events{/privacy}',
                received_events_url:
                    'https://api.github.com/users/itsSayantan/received_events',
                type: 'User',
                site_admin: false
            },
            html_url: 'https://github.com/itsSayantan/writedown-editor',
            description:
                'The main editor for writedown (https://github.com/iamparnab/writedown)',
            fork: false,
            url: 'https://api.github.com/repos/itsSayantan/writedown-editor',
            forks_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/forks',
            keys_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/keys{/key_id}',
            collaborators_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/collaborators{/collaborator}',
            teams_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/teams',
            hooks_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/hooks',
            issue_events_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/issues/events{/number}',
            events_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/events',
            assignees_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/assignees{/user}',
            branches_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/branches{/branch}',
            tags_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/tags',
            blobs_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/git/blobs{/sha}',
            git_tags_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/git/tags{/sha}',
            git_refs_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/git/refs{/sha}',
            trees_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/git/trees{/sha}',
            statuses_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/statuses/{sha}',
            languages_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/languages',
            stargazers_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/stargazers',
            contributors_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/contributors',
            subscribers_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/subscribers',
            subscription_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/subscription',
            commits_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/commits{/sha}',
            git_commits_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/git/commits{/sha}',
            comments_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/comments{/number}',
            issue_comment_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/issues/comments{/number}',
            contents_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/contents/{+path}',
            compare_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/compare/{base}...{head}',
            merges_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/merges',
            archive_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/{archive_format}{/ref}',
            downloads_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/downloads',
            issues_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/issues{/number}',
            pulls_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/pulls{/number}',
            milestones_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/milestones{/number}',
            notifications_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/notifications{?since,all,participating}',
            labels_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/labels{/name}',
            releases_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/releases{/id}',
            deployments_url:
                'https://api.github.com/repos/itsSayantan/writedown-editor/deployments',
            created_at: '2019-11-19T17:23:01Z',
            updated_at: '2019-12-26T05:34:59Z',
            pushed_at: '2019-12-26T05:34:57Z',
            git_url: 'git://github.com/itsSayantan/writedown-editor.git',
            ssh_url: 'git@github.com:itsSayantan/writedown-editor.git',
            clone_url: 'https://github.com/itsSayantan/writedown-editor.git',
            svn_url: 'https://github.com/itsSayantan/writedown-editor',
            homepage: null,
            size: 441,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'TypeScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: {
                key: 'mit',
                name: 'MIT License',
                spdx_id: 'MIT',
                url: 'https://api.github.com/licenses/mit',
                node_id: 'MDc6TGljZW5zZTEz'
            },
            forks: 1,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master'
        }
    ]
};

import {
    enableMainLoaderAction,
    disableMainLoaderAction,
    setProjectsDataAction
} from '@Shared/constants';

const ProjectsLoaderView = () => {
    return (
        <div
            style={{
                marginTop: '10px',
                width: '100%',
                height: '150px'
            }}
        >
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
            <ContentLoadingIndicator />
        </div>
    );
};

const ProjectsData = React.memo((props: ProjectsDataPropsType) => {
    if (props?.data instanceof Array) {
        return (
            <>
                {props?.data.map(pd => {
                    return (
                        <div className="projects-item" key={pd?.id}>
                            <div className="projects-item-title">
                                <a href={pd?.html_url} target="_blank">
                                    {pd?.name}
                                </a>
                            </div>
                            <div className="projects-item-description">
                                {pd?.description}
                            </div>
                        </div>
                    );
                })}
            </>
        );
    } else {
        // data is not present or corrupted
        return <></>;
    }
});

const Projects = (props: ProjectsPropsType) => {
    const { state, dispatch } = React.useContext(AppContext) as AppContextType;
    React.useEffect(() => {
        dispatch({ type: enableMainLoaderAction });

        // will fetch static json for now till something else is figured out
        // the following code will change in the future

        // fetch('https://api.github.com/users/itsSayantan/repos')
        //     .then(data => data.json())
        //     .then(jsonData => {
        //         dispatch({
        //             type: disableMainLoaderAction
        //         });
        //     });

        dispatch({
            type: setProjectsDataAction,
            payload: staticJson
        });
        setTimeout(() => {
            dispatch({
                type: disableMainLoaderAction
            });
        }, 500);
    }, []);

    return (
        <AppContext.Consumer>
            {(appContext: AppContextType) => {
                const mainLoaderState = appContext?.state?.AppState?.mainLoader;
                const isLoaderEnabled = mainLoaderState?.enabled;
                const projectsContext = appContext?.state?.AppTheme?.Projects;
                const projectsStyles = projectsContext?.projectsStyles;
                const projectsData = appContext?.state?.ProjectsData;

                const projectContent = isLoaderEnabled ? (
                    <ProjectsLoaderView />
                ) : (
                    <ProjectsData data={projectsData.repoDetails} />
                );

                return (
                    <MainLayout>
                        <>
                            <div className="projects-wrapper">
                                <PageTitle
                                    text="Projects"
                                    textColor={projectsStyles?.pageTitle?.color}
                                    fontSize={
                                        projectsStyles?.pageTitle?.fontSize
                                    }
                                />
                                <div className="projects-items-wrapper">
                                    {projectContent}
                                </div>
                            </div>
                        </>
                    </MainLayout>
                );
            }}
        </AppContext.Consumer>
    );
};

export default Projects;
