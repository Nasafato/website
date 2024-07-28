export default function Page() {
  return <Angled />;
}

function Angled() {
  return (
    <div>
      <h1 className="font-bold text-[4rem] leading-[3.4rem] mb-6 text-center mt-8">
        The <br></br>Sermon <br /> on the Mount
      </h1>
      <IntroReverseCone></IntroReverseCone>

      <div className="w-full h-[1px] bg-gray-300/70 my-8 mx-8"></div>

      <BeatitudesStylized />
      <div className="mt-8">
        <BelieversAreSaltAndLight />
      </div>
      <div className="mt-6">
        <ChristFulfillsTheLaw />
      </div>
      <div className="mt-6">
        <MurderBeginsInTheHeart />
      </div>
      <div className="mt-6">
        <AdulteryInTheHeart />
      </div>
      <div className="mt-6">
        <MarriageIsSacredAndBinding />
      </div>
      <div className="mt-6">
        <JesusForbidsOaths />
      </div>
      <div className="mt-6">
        <GoTheSecondMile />
      </div>
      <div className="mt-6">
        <LoveYourEnemies />
      </div>
      <div className="mt-6">
        <DoGoodToPleaseGod />
      </div>
      <div className="mt-6">
        <TheLordsPrayer />
      </div>
      <div className="mt-6">
        <FastingtoBeSeenOnlyByGod />
      </div>
      <div className="mt-6">
        <LayUpTreasuresInHeaven />
      </div>
      <div className="mt-6">
        <TheLampOfTheBody />
      </div>
      <div className="mt-6">
        <YouCannotServeGodAndRiches />
      </div>
      <div className="w-full h-[1px] bg-gray-300/70 my-8"></div>
      <div className="mt-16">
        <DoNotWorry />
      </div>
      <div className="mt-6">
        <DoNotJudge />
      </div>
      <div className="mt-16">
        <Ask />
      </div>
      <div className="w-full h-[1px] bg-gray-300/70 my-8 mt-16"></div>
      <div className="mt-12">
        <BewareFalseProphets />
      </div>
      <div className="mt-12">
        <TheFalselyFaithful />
      </div>
      <div className="mt-12">
        <BuildAHouseOnTheRock />
      </div>
      <div className="mt-20">
        <Conclusion />
      </div>
    </div>
  );
}

function IntroReverseCone() {
  return (
    <div className="text-center">
      <p>And seeing the multitudes, he went up into a</p>
      <p>mountain: and when he was set, his</p>
      <p>disciples came unto him: And</p>
      <p>he opened his mouth,</p>
      <p>and taught them,</p>
      <p>saying:</p>
    </div>
  );
}

function BeatitudesStylized() {
  return (
    <div className="pt-4 space-y-3">
      <div>
        Blessed are the poor in spirit, for theirs is the kingdom of heaven.
      </div>
      <div>Blessed are they that mourn, for they shall be comforted.</div>
      <div>Blessed are the meek, for they shall inherit the earth.</div>
      <div>
        Blessed are they which do hunger and thirst after <br></br>
        righteousness, for they shall be filled.
      </div>

      <div>
        Blessed are the merciful, for <br></br>they shall obtain mercy.
      </div>
      <div>
        Blessed are the pure in <br></br>heart, for they shall see God.
      </div>
      <div>
        Blessed are the peacemakers, for <br></br>they shall be called the
        children of God.
      </div>
      <div>
        Blessed are they which are persecuted for
        <br />
        righteousness' sake, for theirs is the kingdom of heaven.
      </div>
    </div>
  );
}

function Beatitudes() {
  return (
    <div className="pl-8 pt-4 space-y-3">
      <div>
        Blessed are the poor in spirit,
        <br />
        For theirs is the kingdom of heaven.
      </div>
      <div>
        Blessed are they that mourn,
        <br />
        For they shall be comforted.
      </div>
      <div>
        Blessed are the meek,
        <br />
        For they shall inherit the earth.
      </div>
      <div>
        Blessed are they which do hunger and thirst after righteousness,
        <br />
        For they shall be filled.
      </div>
      <div>
        Blessed are the merciful,
        <br />
        For they shall obtain mercy.
      </div>
      <div>
        Blessed are the pure in heart,
        <br />
        For they shall see God.
      </div>
      <div>
        Blessed are the peacemakers,
        <br />
        For they shall be called the children of God.
      </div>
      <div>
        Blessed are they which are persecuted for righteousness' sake,
        <br />
        For theirs is the kingdom of heaven.
      </div>
    </div>
  );
}

function BelieversAreSaltAndLight() {
  return (
    <div className="space-y-4">
      <div>
        <span className="font-bold capitalize text-xl">YE</span> are the salt of
        the earth: but if the salt have lost his savour, wherewith shall it be
        salted? it is thenceforth good for nothing, but to be cast out, and to
        be trodden under foot of men.
      </div>
      <div className="space-y-2">
        <p className="">
          <span className="font-bold capitalize text-xl">YE</span> are the light
          of the world. A city that is set on an hill cannot be hid.
        </p>
        <p className="pl-8">
          Neither do men light a candle, and put it under a bushel, but on a
          candlestick; and it giveth light unto all that are in the house.
        </p>
        <p className="pl-16">
          Let your light so shine before men, that <br></br>they may see your
          good works, and <br></br>glorify your Father which is in <br></br>
          heaven.
        </p>
      </div>
    </div>
  );
}

function ChristFulfillsTheLaw() {
  return (
    <div className="text-right">
      <p>
        <span className="font-bold">THINK NOT</span> that I am come to destroy
        the law, <br></br>or the prophets: I am not come to destroy, but to
        fulfil.
      </p>
      <p>
        For verily I say unto you, Till heaven and earth pass, one jot <br></br>
        or one title shall in no wise pass from the law, till all be fulfilled.
      </p>
      <p>
        Whosoever therefore shall break one of these least commandments, and
        <br></br>shall teach men so, he shall be called the least in the kingdom
        of heaven: but whosoever shall do and teach them, the same shall be
        called great in the kingdom of heaven. For I say unto you, That except
        your righteousness shall exceed the righteousness of the scribes and
        Pharisees, ye shall <br></br>in no case enter into the kingdom of
        heaven.
      </p>
    </div>
  );
}

function MurderBeginsInTheHeart() {
  return (
    <div className="flex flex-col items-start space-y-3 pt-4">
      <p className="max-w-full">
        <Bold>YE HAVE HEARD</Bold> that it was said of them of old time, Thou
        shalt not kill; and{" "}
        <span className="ml-4">
          whosoever shall kill shall be in danger of the judgment:
        </span>
      </p>
      <p className="max-w-[95%] ml-[5%]">
        But I say unto you, That whosoever is angry with his brother without a
        cause <span className="ml-4">shall</span> be in danger of the judgment:
        and whosoever shall say to his brother,{" "}
        <span className="ml-8">Raca,</span> shall be in danger of the council:
        but whosoever shall say, Thou fool,{" "}
        <span className="ml-12">shall be in danger of hell fire.</span>
      </p>
      <p className="max-w-[80%] ml-[20%]">
        Therefore if thou bring thy gift to the altar, and there{" "}
        <span className="ml-4">rememberest</span> that thy brother hath ought
        against thee;
      </p>
      <p className="max-w-[70%] ml-[30%]">
        Agree with thine adversary quickly, whiles thou art in the <HSpace />
        way with him; lest at any time the adversary deliver{" "}
        <HSpace className="ml-4" />
        thee to the judge, and the judge deliver thee to the{" "}
        <HSpace className="ml-8" />
        officer, and thou be cast into prison.
      </p>
      <p className="max-w-[40%] ml-[40%]">
        Verily I say unto thee, Thou shalt <HSpace />
        by no means come out thence,{" "}
        <span className="ml-8">
          till thou hast paid the <br></br>
          <span className="ml-10 italic">uttermost farthing.</span>
        </span>
      </p>
    </div>
  );
}

function HSpace(props: { className?: string }) {
  return <span className={`w-[1rem] inline-block ${props.className}`}> </span>;
}

function Bold(props: { className?: string; children: React.ReactNode }) {
  return (
    <span className={`font-bold ${props.className}`}>{props.children}</span>
  );
}

function AdulteryInTheHeart() {
  return (
    <div className="space-y-3">
      <div>
        <Bold>YE HAVE HEARD</Bold> that it was said by them of old time, Thou
        shalt not commit{" "}
        <div className="ml-4">
          adultery: But I say unto you, That whosoever looketh on a woman to
          lust after
          <div className="ml-4">
            her hath committed adultery with her already in his heart.
          </div>
        </div>
      </div>
      <div className="">
        <div className="ml-8">
          And if thy right eye offend thee, pluck it out, and cast it from thee:
        </div>
        <div className="ml-6">
          for it is profitable for thee that one of thy members should perish,
          and not that
        </div>
        <div className="ml-4">hy whole body should be cast into hell.</div>
      </div>
      <div>
        And if thy right hand offend thee, cut it off, and cast it from thee:
        for it is profitable for thee that one of thy members should perish, and
        not that thy whole body should be cast into hell.
      </div>
    </div>
  );
}

function MarriageIsSacredAndBinding() {
  return (
    <div>
      <div>
        <Bold>IT HATH BEEN SAID</Bold>, Whosoever shall put away his wife, let
        him give her a writing of divorcement:
      </div>
      <div>
        But I say unto you, That whosoever shall put away his wife, saving for
        the cause of fornication, causeth her to commit adultery: and whosoever
        shall marry her that is divorced committeth adultery.
      </div>
    </div>
  );
}

function JesusForbidsOaths() {
  return (
    <div>
      <Bold>AGAIN, YE HAVE HEARD</Bold> that it hath been said by them of old
      time, Thou shalt not forswear thyself, but shalt perform unto the Lord
      thine oaths:
      <div className="ml-4">
        But I say unto you, Swear not at all; neither by heaven; for it is God's
        throne:
      </div>
      <div className="ml-4">Nor by the earth; for it is his footstool:</div>
      <div className="ml-4">
        neither by Jerusalem; for it is the city of the great King.
      </div>
      <div className="ml-4">
        Neither shalt thou swear by thy head, because thou canst not make one
        hair white or black.
      </div>
      <div className="ml-4">
        But let your communication be, Yea, yea; Nay, nay: for whatsoever is
        more than these cometh of evil.
      </div>
    </div>
  );
}

function GoTheSecondMile() {
  return (
    <div>
      <Bold>YE HAVE HEARD</Bold> that it hath been said, An eye for an eye, and
      a tooth for a tooth:
      <div className="ml-4">
        But I say unto you, That ye resist not evil: but whosoever shall smite
        thee on thy right cheek, turn to him the other also.
      </div>
      <div className="ml-4">
        And if any man will sue thee at the law, and take away thy coat, let him
        have thy cloak also.
      </div>
      <div className="ml-4">
        And whosoever shall compel thee to go a mile, go with him twain.
      </div>
      <div className="ml-4">
        Give to him that asketh thee, and from him that would borrow of thee
        turn not thou away.
      </div>
    </div>
  );
}

function LoveYourEnemies() {
  return (
    <div>
      <Bold>YE HAVE HEARD</Bold> that it hath been said, Thou shalt love thy
      neighbour, and hate thine enemy.
      <div className="ml-2">
        But I say unto you,{" "}
        <span className="font-bold">
          Love your enemies, bless them that curse you , do good to them that
          hate you, and pray for them which despitefully use you, and persecute
          you
        </span>
        ;
      </div>
      <div className="ml-4">
        That ye may be the children of your Father which is in heaven: for he
        maketh his sun to rise on the evil and on the good, and sendeth rain on
        the just and on the unjust.
        <div className="ml-4">
          For if ye love them which love you, what reward have ye? do not even
          the publicans the same?
        </div>
        <div className="ml-6">
          And if ye salute your brethren only, what do ye more than others? do
          not even the publicans so?
        </div>
        <div className="ml-8">
          Be ye therefore perfect, even as your Father which is in heaven is
          perfect.
        </div>
      </div>
    </div>
  );
}

function DoGoodToPleaseGod() {
  return (
    <div>
      <Bold>TAKE HEED</Bold> that ye do not your alms before men, to be seen of
      them: otherwise ye have no reward of your Father which is in heaven.
      <div className="ml-4">
        Therefore when thou doest thine alms, do not sound a trumpet before
        thee, as the hypocrites do in the synagogues and in the streets, that
        they may have glory of men.
      </div>
      <div className="ml-4">Verily I say unto you, They have their reward.</div>
      <div className="ml-4">
        But when thou doest alms, let not thy left hand know what thy right hand
        doeth:
      </div>
      <div className="ml-4">
        That thine alms may be in secret: and thy Father which seeth in secret
        himself shall reward thee openly.
      </div>
    </div>
  );
}

function TheLordsPrayer() {
  return (
    <div>
      <Bold>AND WHEN THOU PRAYEST</Bold>, thou shalt not be as the hypocrites
      are: for they love to pray standing in the synagogues and in the corners
      of the streets, that they may be seen of men. Verily I say unto you, They
      have their reward.
      <div className="ml-4">
        But thou, when thou prayest, enter into thy closet, and when thou hast
        shut thy door, pray to thy Father which is in secret; and thy Father
        which seeth in secret shall reward thee openly.
      </div>
      <div className="ml-4">
        But when ye pray, use not vain repetitions, as the heathen do: for they
        think that they shall be heard for their much speaking.
      </div>
      <div className="ml-4">
        Be not ye therefore like unto them: for your Father knoweth what things
        ye have need of, before ye ask him.
      </div>
      <div className="ml-4">After this manner therefore pray ye:</div>
      <div>
        <div className="max-w-[420px] mx-auto py-5 space-y-3">
          <div>
            Our Father which art in heaven, <br />
            Hallowed be thy name.
          </div>
          <div>
            Thy kingdom come, <br />
            Thy will be done in earth, as it is in heaven.
          </div>
          <div>Give us this day our daily bread. </div>
          <div>And forgive us our debts, as we forgive our debtors. </div>
          <div>And lead us not into temptation, but deliver us from evil: </div>
          <div>
            For thine is the kingdom, and the power, and the glory, for ever.{" "}
          </div>
          <div>Amen.</div>
        </div>
      </div>
      <div className="ml-4 text-right space-y-2">
        <div className="ml-auto max-w-[420px]">
          <span className="italic">For if ye forgive men their trespasses</span>
          ,<br /> your heavenly Father will also forgive you:
        </div>
        <div className="ml-auto max-w-[360px]">
          <span className="italic">
            But if ye forgive not men their trespasses,
          </span>
          <br />
          neither will your Father forgive <br />
          your trespasses.
        </div>
      </div>
    </div>
  );
}
function FastingtoBeSeenOnlyByGod() {
  return (
    <div>
      <Bold>Moreover when ye fast</Bold>, be not, as the hypocrites, of a sad
      countenance: for they disfigure their faces, that they may appear unto men
      to fast. Verily I say unto you, They have their reward. But thou, when
      thou fastest, anoint thine head, and wash thy face; That thou appear not
      unto men to fast, but unto thy Father which is in secret: and thy Father,
      which seeth in secret, shall reward thee openly.
    </div>
  );
}

function LayUpTreasuresInHeaven() {
  return (
    <div>
      <Bold>LAY NOT UP FOR YOURSELVES</Bold> treasures upon earth, where moth
      and rust doth corrupt, and where thieves break through and steal:
      <div className="ml-4">
        But lay up for yourselves treasures in heaven, where neither moth nor
        rust doth corrupt, and where thieves do not break through nor steal:
      </div>
      <div className="ml-4">
        For where your treasure is, there will your heart be also.
      </div>
    </div>
  );
}

function TheLampOfTheBody() {
  return (
    <div>
      <Bold>THE LIGHT OF THE BODY IS THE EYE</Bold>: if therefore thine eye be
      single, thy whole body shall be full of light.
      <div className="ml-4">
        But if thine eye be evil, thy whole body shall be full of darkness.
      </div>
      <div className="ml-4">
        If therefore the light that is in thee be darkness, how great is that
        darkness!
      </div>
    </div>
  );
}

function YouCannotServeGodAndRiches() {
  return (
    <div>
      No man can serve two masters: for either he will hate the one, and love
      the other; or else he will hold to the one, and despise the other. Ye
      cannot serve God and mammon.
    </div>
  );
}

function DoNotWorry() {
  return (
    <div className="space-y-8">
      <div className="text-xl">
        <Bold>THEREFORE I SAY UNTO YOU,</Bold>
      </div>
      <div className="text-left">
        <div className="max-w-[420px] mr-auto">
          Take no thought for your life, what ye shall eat, or what ye shall
          drink; nor yet for your body, what ye shall put on.
        </div>
        <div className="text-right mt-1 text-xl font-medium max-w-[320px] ml-auto">
          Is not the life more than meat, and the body than raiment?
        </div>
      </div>
      <div>
        <div className="max-w-[480px] mr-auto">
          Behold the fowls of the air: for they sow not, neither do they reap,
          nor gather into barns; yet your heavenly Father feedeth them.
        </div>
        <div className="text-right mt-1">Are ye not much better than they?</div>
      </div>
      <div className="text-center py-4">
        Which of you by taking thought{" "}
        <span className="font-medium">can add one cubit unto his stature?</span>
      </div>
      <div>
        <div className="max-w-[480px] mr-auto">
          And why take ye thought for raiment? Consider the lilies of the field,
          how they grow; they toil not, neither do they spin:
        </div>
        <div className="text-right mt-2">
          <div className="ml-auto max-w-[480px] text-xl font-medium">
            And yet I say unto you, <br />
            That even Solomon in all his glory <br />
            was not arrayed like one of these.
          </div>
        </div>
      </div>

      <div className="ml-4">
        Wherefore, if God so clothe the grass of the field, which to day is, and
        to morrow is cast into the oven, shall he not much more clothe you, O ye
        of little faith?
        <div className="mr-4 text-right max-w-[480px] ml-auto mt-4">
          Therefore take no thought, saying, What shall we eat? or, What shall
          we drink? or, Wherewithal shall we be clothed?
        </div>
      </div>

      <div className="ml-4">
        (For after all these things do the Gentiles seek:) for your heavenly
        Father knoweth that ye have need of all these things.
      </div>
      <div className="text-xl font-medium max-w-[480px] mr-auto">
        But seek ye first the kingdom of God, and his righteousness; and all
        these things shall be <br />
        added unto you.
      </div>
      <div className="max-w-[560px] mx-auto">
        Take therefore no thought for the morrow:{" "}
        <div className="ml-4">
          For the morrow shall take thought for the things of itself.
        </div>
        <div className="ml-8">Sufficient unto the day is the evil thereof.</div>
      </div>
    </div>
  );
}

function DoNotJudge() {
  return (
    <div className="space-y-4 mt-16">
      <h2 className="text-xl">
        <Bold>JUDGE NOT, THAT YE BE NOT JUDGED.</Bold>
      </h2>
      <div>
        For with what judgment ye judge, ye shall be judged:{" "}
        <div className="ml-4">
          And with what measure ye mete, it shall be measured to you again.
        </div>
      </div>
      <div className="text-right max-w-[520px] ml-auto">
        And why beholdest thou the mote that is in thy brother's eye, but
        considerest not the beam that is in thine own eye?
      </div>
      <div className="text-right max-w-[520px] ml-auto">
        Or how wilt thou say to thy brother, <br />
        Let me pull out the mote out of thine eye; <br />
        and, behold, a beam is in thine own eye?
      </div>
      <div className="text-center max-w-[560px] mx-auto">
        Thou hypocrite, first cast out the beam out of thine own eye; and then
        shalt thou see clearly to cast out the mote out of thy brother's eye.
      </div>
      <div className="text-left max-w-[560px] mr-auto">
        Give not that which is holy unto the dogs, neither cast ye your pearls
        before swine, lest they trample them under their feet, and turn again
        and rend you.
      </div>
    </div>
  );
}

function Ask() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl">
          <Bold>ASK, AND IT SHALL BE GIVEN YOU; </Bold>
        </h2>{" "}
        <span className="ml-4">
          seek, and ye shall find; knock, and it shall be opened unto you:
        </span>
      </div>
      <div className="text-xl font-medium">
        For every one that asketh receiveth;{" "}
        <div className="ml-4">
          and he that seeketh findeth;{" "}
          <div className="ml-4">
            and to him that knocketh it shall be opened.
          </div>
        </div>
      </div>
      <div className="text-right max-w-[420px] ml-auto">
        Or what man is there of you, whom if <br />
        his son ask bread, will he give him a stone?
      </div>
      <div className="text-right">
        Or if he ask a fish, will he give him a serpent?
      </div>
      <div className="text-left max-w-[600px] mr-auto">
        If ye then, being evil, know how to give good gifts unto your children,
        <div className="ml-4">
          how much more shall your Father which is in heaven give good
          <div className="ml-4">things to them that ask him?</div>
        </div>
      </div>
      <div className="text-center max-w-[600px] mx-auto">
        Therefore all things whatsoever ye would that men should do to you, do
        ye even so to them: for this is the law and the prophets.
      </div>
    </div>
  );
}

function TheNarrowWay() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl">
          <Bold>ENTER YE IN AT THE STRAIT GATE: </Bold>
        </h2>
        <span className="ml-4">
          for wide is the gate, and broad is the way, that leadeth to
          destruction, and many there be which go in thereat:
        </span>
      </div>
      <div className="text-xl font-medium">
        Because strait is the gate, and narrow is the way, which leadeth unto
        life,
        <div className="ml-4">and few there be that find it.</div>
      </div>
    </div>
  );
}

function BewareFalseProphets() {
  return (
    <div>
      <div>
        <h2 className="text-xl inline">
          <Bold>BEWARE</Bold> of false prophets,
        </h2>{" "}
        which come to you in sheep's clothing, but inwardly they are ravening
        wolves.
      </div>
      <div className="space-y-3 max-w-[480px] mt-4">
        <div className="ml-4">
          Ye shall know them by their fruits. <br />
          Do men gather grapes of thorns, or figs of thistles?
        </div>
        <div className="ml-4">
          Even so every good tree bringeth forth good fruit; <br />
          but a corrupt tree bringeth forth evil fruit.
        </div>
        <div className="ml-4">
          A good tree cannot bring forth evil fruit, <br />
          neither can a corrupt tree bring forth good fruit.
        </div>
        <div className="ml-4">
          Every tree that bringeth not forth good fruit <br />
          is hewn down, and cast into the fire.
        </div>
        <div className="ml-4">
          Wherefore by their fruits ye shall know them.
        </div>
      </div>
    </div>
  );
}

function TheFalselyFaithful() {
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-xl inline">
          <Bold>NOT </Bold>every one that saith unto me, Lord, Lord,
        </h2>{" "}
        shall enter into the kingdom of heaven; but he that doeth the will of my
        Father which is in heaven.
      </div>
      <div className="ml-4">
        Many will say to me in that day, Lord, Lord, have we not prophesied in
        thy name? and in thy name have cast out devils? and in thy name done
        many wonderful works?
      </div>
      <div className="ml-4">
        And then will I profess unto them, I never knew you: depart from me, ye
        that work iniquity.
      </div>
    </div>
  );
}

function BuildAHouseOnTheRock() {
  return (
    <div>
      <div>
        <h2 className="text-xl inline">
          <Bold>THEREFORE </Bold>whosoever heareth these sayings of mine, and
          doeth them,
        </h2>{" "}
        I will liken him unto a wise man, which built his house upon a rock:
      </div>
      <div className="space-y-3 mt-4 max-w-[480px]">
        <div className="ml-4">
          And the rain descended, and the floods came, and the winds blew, and
          beat upon that house; and it fell not: for it was founded upon a rock.
        </div>
        <div className="ml-4">
          And every one that heareth these sayings of mine, and doeth them not,
          shall be likened unto a foolish man, which built his house upon the
          sand:
        </div>
        <div className="ml-4">
          And the rain descended, and the floods came, and the winds blew, and
          beat upon that house; and it fell: and great was the fall of it.
        </div>
      </div>
    </div>
  );
}
function Conclusion() {
  return (
    <div className="text-center space-y-2">
      <h2>
        <Bold>AND IT CAME TO PASS,</Bold>
      </h2>
      <div>when Jesus had ended these sayings,</div>
      <div>the people were astonished at his doctrine:</div>
      <div>
        For he taught them as one having authority, and not as the scribes.
      </div>
    </div>
  );
}
