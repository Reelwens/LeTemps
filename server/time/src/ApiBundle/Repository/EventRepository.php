<?php

namespace ApiBundle\Repository;

use ApiBundle\Entity\Calendar;
use ApiBundle\Entity\User;
use Doctrine\ORM\EntityRepository;

/**
 * EventRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class EventRepository extends EntityRepository
{
	public function findAllViewed(User $user) {
		return $this->createQueryBuilder("e")
			->join("e.calendar", "c", "WITH", "c.user = :user")
			->where("e.viewed = :viewed")
			->setParameter("user", $user)
			->setParameter("viewed", true)
			->getQuery()
			->execute();
		
	}
	
	public function findOneByDate(Calendar $calendar, $date) {
		$res = $this->createQueryBuilder("event")
			->andWhere('event.date = :date')
			->andWhere("event.calendar = :calendar")
			->setParameter("date", new \DateTime($date))
			->setParameter("calendar", $calendar)
			->getQuery()
			->execute();
		
		return $res === [] ? null : $res;
	}
}
