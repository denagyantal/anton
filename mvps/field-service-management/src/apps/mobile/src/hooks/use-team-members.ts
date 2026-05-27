import { useState, useEffect } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../contexts/database-context';
import { useAuth } from '../contexts/auth-context';
import TeamMember from '../db/models/team-member';

export function useTeamMembers(): { teamMembers: TeamMember[]; isLoading: boolean } {
  const database = useDatabase();
  const { user } = useAuth();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.accountId) {
      setTeamMembers([]);
      setIsLoading(false);
      return;
    }

    const subscription = database
      .get<TeamMember>('team_members')
      .query(
        Q.where('account_id', user.accountId),
        Q.sortBy('name', Q.asc),
      )
      .observe()
      .subscribe((records) => {
        setTeamMembers(records);
        setIsLoading(false);
      });

    return () => subscription.unsubscribe();
  }, [database, user?.accountId]);

  return { teamMembers, isLoading };
}
