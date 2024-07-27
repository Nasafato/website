export default function Page() {
  return <Angled />;
}

function Angled() {
  return (
    <div>
      <h1 className="font-bold text-[4rem] leading-[3.4rem] mb-6 text-center mt-8">
        The <br></br>Sermon <br /> on the Mount
      </h1>
      {/* <Intro></Intro> */}
      <IntroReverseCone></IntroReverseCone>

      <div className="w-full h-[1px] bg-gray-300/70 my-8 mx-8"></div>

      <BeatitudesStylized />
      {/* <Beatitudes /> */}
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
      <div className="mt-6">
        <DoNotWorry />
      </div>
      <div className="mt-6">
        <DoNotJudge />
      </div>
      <div className="mt-6">
        <Ask />
      </div>
      <div className="mt-6">
        <BewareFalseProphets />
      </div>
      <div className="mt-6">
        <TheFalselyFaithful />
      </div>
      <div className="mt-6">
        <BuildAHouseOnTheRock />
      </div>
      <div className="mt-6">
        <Conclusion />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="text-center">
      <p>And seeing</p>
      <p>the multitudes,</p>
      <p>he went up into a</p>
      <p>mountain: and when</p>
      <p>he was set, his disciples</p>
      <p>came unto him: And he opened</p>
      <p>his mouth, and taught them, saying:</p>
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
function Default() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">The Sermon on the Mount</h1>
      <div>
        And seeing the multitudes, he went up into a mountain: and when he was
        set, his disciples came unto him:
      </div>
      <p>And he opened his mouth, and taught them, saying,</p>
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
      <div className="space-y-4 mt-6">
        <p>
          Blessed are ye, when men shall revile you, and persecute you, and
          shall say all manner of evil against you falsely, for my sake.
          Rejoice, and be exceeding glad: for great is your reward in heaven:
          for so persecuted they the prophets which were before you.
        </p>
        <p>
          Ye are the salt of the earth: but if the salt have lost his savour,
          wherewith shall it be salted? it is thenceforth good for nothing, but
          to be cast out, and to be trodden under foot of men.
        </p>
        <p>
          Ye are the light of the world. A city that is set on an hill cannot be
          hid. <br />
          Neither do men light a candle, and put it under a bushel, but on a
          candlestick; and it giveth light unto all that are in the house. Let
          your light so shine before men, that they may see your good works, and
          glorify your Father which is in heaven.
        </p>
        <p>
          Think not that I am come to destroy the law, or the prophets: I am not
          come to destroy, but to fulfil. <br />
          For verily I say unto you, Till heaven and earth pass, one jot or one
          tittle shall in no wise pass from the law, till all be fulfilled.{" "}
          <br />
          Whosoever therefore shall break one of these least commandments, and
          shall teach men so, he shall be called the least in the kingdom of
          heaven: but whosoever shall do and teach them, the same shall be
          called great in the kingdom of heaven. <br />
          For I say unto you, That except your righteousness shall exceed the
          righteousness of the scribes and Pharisees, ye shall in no case enter
          into the kingdom of heaven.
        </p>
        <p></p>
        <p>
          Ye have heard that it was said of them of old time, Thou shalt not
          kill; and whosoever shall kill shall be in danger of the judgment:
        </p>
        <p>
          But I say unto you, That whosoever is angry with his brother without a
          cause shall be in danger of the judgment: and whosoever shall say to
          his brother, Raca, shall be in danger of the council: but whosoever
          shall say, Thou fool, shall be in danger of hell fire.
        </p>
        <p>
          Therefore if thou bring thy gift to the altar, and there rememberest
          that thy brother hath ought against thee;
        </p>
        <p>
          Leave there thy gift before the altar, and go thy way; first be
          reconciled to thy brother, and then come and offer thy gift.
        </p>
        <p>
          Agree with thine adversary quickly, whiles thou art in the way with
          him; lest at any time the adversary deliver thee to the judge, and the
          judge deliver thee to the officer, and thou be cast into prison.
        </p>
        <p>
          Verily I say unto thee, Thou shalt by no means come out thence, till
          thou hast paid the uttermost farthing.
        </p>
        <p>
          Ye have heard that it was said by them of old time, Thou shalt not
          commit adultery:
        </p>
        <p>
          But I say unto you, That whosoever looketh on a woman to lust after
          her hath committed adultery with her already in his heart.
        </p>
        <p>
          And if thy right eye offend thee, pluck it out, and cast it from thee:
          for it is profitable for thee that one of thy members should perish,
          and not that thy whole body should be cast into hell.
        </p>
        <p>
          And if thy right hand offend thee, cut it off, and cast it from thee:
          for it is profitable for thee that one of thy members should perish,
          and not that thy whole body should be cast into hell.
        </p>
        <p>
          It hath been said, Whosoever shall put away his wife, let him give her
          a writing of divorcement:
        </p>
        <p>
          But I say unto you, That whosoever shall put away his wife, saving for
          the cause of fornication, causeth her to commit adultery: and
          whosoever shall marry her that is divorced committeth adultery.
        </p>
        <p>
          Again, ye have heard that it hath been said by them of old time, Thou
          shalt not forswear thyself, but shalt perform unto the Lord thine
          oaths:
        </p>
        <p>
          But I say unto you, Swear not at all; neither by heaven; for it is
          God's throne:
        </p>
        <p>
          Nor by the earth; for it is his footstool: neither by Jerusalem; for
          it is the city of the great King.
        </p>
        <p>
          Neither shalt thou swear by thy head, because thou canst not make one
          hair white or black.
        </p>
        <p>
          But let your communication be, Yea, yea; Nay, nay: for whatsoever is
          more than these cometh of evil.
        </p>
        <p>
          Ye have heard that it hath been said, An eye for an eye, and a tooth
          for a tooth:
        </p>
        <p>
          But I say unto you, That ye resist not evil: but whosoever shall smite
          thee on thy right cheek, turn to him the other also.
        </p>
        <p>
          And if any man will sue thee at the law, and take away thy coat, let
          him have thy cloak also.
        </p>
        <p>And whosoever shall compel thee to go a mile, go with him twain.</p>
        <p>
          Give to him that asketh thee, and from him that would borrow of thee
          turn not thou away.
        </p>
        <p>
          Ye have heard that it hath been said, Thou shalt love thy neighbour,
          and hate thine enemy.
        </p>
        <p>
          But I say unto you, Love your enemies, bless them that curse you, do
          good to them that hate you, and pray for them which despitefully use
          you, and persecute you;
        </p>
        <p>
          That ye may be the children of your Father which is in heaven: for he
          maketh his sun to rise on the evil and on the good, and sendeth rain
          on the just and on the unjust.
        </p>
        <p>
          For if ye love them which love you, what reward have ye? do not even
          the publicans the same?
        </p>
        <p>
          And if ye salute your brethren only, what do ye more than others? do
          not even the publicans so?
        </p>
        <p>
          Be ye therefore perfect, even as your Father which is in heaven is
          perfect.
        </p>
        <p>
          Take heed that ye do not your alms before men, to be seen of them:
          otherwise ye have no reward of your Father which is in heaven.
        </p>
        <p>
          Therefore when thou doest thine alms, do not sound a trumpet before
          thee, as the hypocrites do in the synagogues and in the streets, that
          they may have glory of men. Verily I say unto you, They have their
          reward.
        </p>
        <p>
          But when thou doest alms, let not thy left hand know what thy right
          hand doeth:
        </p>
        <p>
          That thine alms may be in secret: and thy Father which seeth in secret
          himself shall reward thee openly.
        </p>
        <p>
          And when thou prayest, thou shalt not be as the hypocrites are: for
          they love to pray standing in the synagogues and in the corners of the
          streets, that they may be seen of men. Verily I say unto you, They
          have their reward.
        </p>
        <p>
          But thou, when thou prayest, enter into thy closet, and when thou hast
          shut thy door, pray to thy Father which is in secret; and thy Father
          which seeth in secret shall reward thee openly.
        </p>
        <p>
          But when ye pray, use not vain repetitions, as the heathen do: for
          they think that they shall be heard for their much speaking.
        </p>
        <p>
          Be not ye therefore like unto them: for your Father knoweth what
          things ye have need of, before ye ask him.
        </p>
        <p>
          After this manner therefore pray ye: Our Father which art in heaven,
          Hallowed be thy name.
        </p>
        <p>Thy kingdom come, Thy will be done in earth, as it is in heaven.</p>
        <p>Give us this day our daily bread.</p>
        <p>And forgive us our debts, as we forgive our debtors.</p>
        <p>
          And lead us not into temptation, but deliver us from evil: For thine
          is the kingdom, and the power, and the glory, for ever. Amen.
        </p>
        <p>
          For if ye forgive men their trespasses, your heavenly Father will also
          forgive you:
        </p>
        <p>
          But if ye forgive not men their trespasses, neither will your Father
          forgive your trespasses.
        </p>
        <p>
          Moreover when ye fast, be not, as the hypocrites, of a sad
          countenance: for they disfigure their faces, that they may appear unto
          men to fast. Verily I say unto you, They have their reward.
        </p>
        <p>
          But thou, when thou fastest, anoint thine head, and wash thy face;
        </p>
        <p>
          That thou appear not unto men to fast, but unto thy Father which is in
          secret: and thy Father, which seeth in secret, shall reward thee
          openly.
        </p>
        <p>
          Lay not up for yourselves treasures upon earth, where moth and rust
          doth corrupt, and where thieves break through and steal:
        </p>
        <p>
          But lay up for yourselves treasures in heaven, where neither moth nor
          rust doth corrupt, and where thieves do not break through nor steal:
        </p>
        <p>For where your treasure is, there will your heart be also.</p>
        <p>
          The light of the body is the eye: if therefore thine eye be single,
          thy whole body shall be full of light.
        </p>
        <p>
          But if thine eye be evil, thy whole body shall be full of darkness. If
          therefore the light that is in thee be darkness, how great is that
          darkness!
        </p>
        <p>
          No man can serve two masters: for either he will hate the one, and
          love the other; or else he will hold to the one, and despise the
          other. Ye cannot serve God and mammon.
        </p>
        <p>
          Therefore I say unto you, Take no thought for your life, what ye shall
          eat, or what ye shall drink; nor yet for your body, what ye shall put
          on. Is not the life more than meat, and the body than raiment?
        </p>
        <p>
          Behold the fowls of the air: for they sow not, neither do they reap,
          nor gather into barns; yet your heavenly Father feedeth them. Are ye
          not much better than they?
        </p>
        <p>
          Which of you by taking thought can add one cubit unto his stature?
        </p>
        <p>
          And why take ye thought for raiment? Consider the lilies of the field,
          how they grow; they toil not, neither do they spin:
        </p>
        <p>
          And yet I say unto you, That even Solomon in all his glory was not
          arrayed like one of these.
        </p>
        <p>
          Wherefore, if God so clothe the grass of the field, which to day is,
          and to morrow is cast into the oven, shall he not much more clothe
          you, O ye of little faith?
        </p>
        <p>
          Therefore take no thought, saying, What shall we eat? or, What shall
          we drink? or, Wherewithal shall we be clothed?
        </p>
        <p>
          (For after all these things do the Gentiles seek:) for your heavenly
          Father knoweth that ye have need of all these things.
        </p>
        <p>
          But seek ye first the kingdom of God, and his righteousness; and all
          these things shall be added unto you.
        </p>
        <p>
          Take therefore no thought for the morrow: for the morrow shall take
          thought for the things of itself. Sufficient unto the day is the evil
          thereof.
        </p>
        <p>Judge not, that ye be not judged.</p>
        <p>
          For with what judgment ye judge, ye shall be judged: and with what
          measure ye mete, it shall be measured to you again.
        </p>
        <p>
          And why beholdest thou the mote that is in thy brother's eye, but
          considerest not the beam that is in thine own eye?
        </p>
        <p>
          Or how wilt thou say to thy brother, Let me pull out the mote out of
          thine eye; and, behold, a beam is in thine own eye?
        </p>
        <p>
          Thou hypocrite, first cast out the beam out of thine own eye; and then
          shalt thou see clearly to cast out the mote out of thy brother's eye.
        </p>
        <p>
          Give not that which is holy unto the dogs, neither cast ye your pearls
          before swine, lest they trample them under their feet, and turn again
          and rend you.
        </p>
        <p>
          Ask, and it shall be given you; seek, and ye shall find; knock, and it
          shall be opened unto you:
        </p>
        <p>
          For every one that asketh receiveth; and he that seeketh findeth; and
          to him that knocketh it shall be opened.
        </p>
        <p>
          Or what man is there of you, whom if his son ask bread, will he give
          him a stone?
        </p>
        <p>Or if he ask a fish, will he give him a serpent?</p>
        <p>
          If ye then, being evil, know how to give good gifts unto your
          children, how much more shall your Father which is in heaven give good
          things to them that ask him?
        </p>
        <p>
          Therefore all things whatsoever ye would that men should do to you, do
          ye even so to them: for this is the law and the prophets.
        </p>
        <p>
          Enter ye in at the strait gate: for wide is the gate, and broad is the
          way, that leadeth to destruction, and many there be which go in
          thereat:
        </p>
        <p>
          Because strait is the gate, and narrow is the way, which leadeth unto
          life, and few there be that find it.
        </p>
        <p>
          Beware of false prophets, which come to you in sheep's clothing, but
          inwardly they are ravening wolves.
        </p>
        <p>
          Ye shall know them by their fruits. Do men gather grapes of thorns, or
          figs of thistles?
        </p>
        <p>
          Even so every good tree bringeth forth good fruit; but a corrupt tree
          bringeth forth evil fruit.
        </p>
        <p>
          A good tree cannot bring forth evil fruit, neither can a corrupt tree
          bring forth good fruit.
        </p>
        <p>
          Every tree that bringeth not forth good fruit is hewn down, and cast
          into the fire.
        </p>
        <p>Wherefore by their fruits ye shall know them.</p>
        <p>
          Not every one that saith unto me, Lord, Lord, shall enter into the
          kingdom of heaven; but he that doeth the will of my Father which is in
          heaven.
        </p>
        <p>
          Many will say to me in that day, Lord, Lord, have we not prophesied in
          thy name? and in thy name have cast out devils? and in thy name done
          many wonderful works?
        </p>
        <p>
          And then will I profess unto them, I never knew you: depart from me,
          ye that work iniquity.
        </p>
        <p>
          Therefore whosoever heareth these sayings of mine, and doeth them, I
          will liken him unto a wise man, which built his house upon a rock:
        </p>
        <p>
          And the rain descended, and the floods came, and the winds blew, and
          beat upon that house; and it fell not: for it was founded upon a rock.
        </p>
        <p>
          And every one that heareth these sayings of mine, and doeth them not,
          shall be likened unto a foolish man, which built his house upon the
          sand:
        </p>
        <p>
          And the rain descended, and the floods came, and the winds blew, and
          beat upon that house; and it fell: and great was the fall of it.
        </p>
        <p>
          And it came to pass, when Jesus had ended these sayings, the people
          were astonished at his doctrine:
        </p>
        <p>
          For he taught them as one having authority, and not as the scribes.
        </p>
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
      <div className="ml-4">
        But I say unto you, Love your enemies, bless them that curse you, do
        good to them that hate you, and pray for them which despitefully use
        you, and persecute you;
      </div>
      <div className="ml-4">
        That ye may be the children of your Father which is in heaven: for he
        maketh his sun to rise on the evil and on the good, and sendeth rain on
        the just and on the unjust.
      </div>
      <div className="ml-4">
        For if ye love them which love you, what reward have ye? do not even the
        publicans the same?
      </div>
      <div className="ml-4">
        And if ye salute your brethren only, what do ye more than others? do not
        even the publicans so?
      </div>
      <div className="ml-4">
        Be ye therefore perfect, even as your Father which is in heaven is
        perfect.
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
        Our Father which art in heaven, Hallowed be thy name. Thy kingdom come,
        Thy will be done in earth, as it is in heaven. Give us this day our
        daily bread. And forgive us our debts, as we forgive our debtors. And
        lead us not into temptation, but deliver us from evil: For thine is the
        kingdom, and the power, and the glory, for ever. Amen.
      </div>
      <div>
        For if ye forgive men their trespasses, your heavenly Father will also
        forgive you: But if ye forgive not men their trespasses, neither will
        your Father forgive your trespasses.
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
    <div>
      <Bold> Therefore I say unto you</Bold>, Take no thought for your life,
      what ye shall eat, or what ye shall drink; nor yet for your body, what ye
      shall put on. Is not the life more than meat, and the body than raiment?
      <div className="ml-4">
        Behold the fowls of the air: for they sow not, neither do they reap, nor
        gather into barns; yet your heavenly Father feedeth them. Are ye not
        much better than they?
      </div>
      <div className="ml-4">
        Which of you by taking thought can add one cubit unto his stature?
      </div>
      <div className="ml-4">
        And why take ye thought for raiment? Consider the lilies of the field,
        how they grow; they toil not, neither do they spin:
      </div>
      <div className="ml-4">
        And yet I say unto you, That even Solomon in all his glory was not
        arrayed like one of these.
      </div>
      <div className="ml-4">
        Wherefore, if God so clothe the grass of the field, which to day is, and
        to morrow is cast into the oven, shall he not much more clothe you, O ye
        of little faith?
      </div>
      <div className="ml-4">
        Therefore take no thought, saying, What shall we eat? or, What shall we
        drink? or, Wherewithal shall we be clothed?
      </div>
      <div className="ml-4">
        (For after all these things do the Gentiles seek:) for your heavenly
        Father knoweth that ye have need of all these things.
      </div>
      <div className="ml-4">
        But seek ye first the kingdom of God, and his righteousness; and all
        these things shall be added unto you.
      </div>
      <div className="ml-4">
        Take therefore no thought for the morrow: for the morrow shall take
        thought for the things of itself. Sufficient unto the day is the evil
        thereof.
      </div>
    </div>
  );
}

function DoNotJudge() {
  return (
    <div>
      Judge not, that ye be not judged. 2 For with what judgment ye judge, ye
      shall be judged: and with what measure ye mete, it shall be measured to
      you again. 3 And why beholdest thou the mote that is in thy brother's eye,
      but considerest not the beam that is in thine own eye? 4 Or how wilt thou
      say to thy brother, Let me pull out the mote out of thine eye; and,
      behold, a beam is in thine own eye? 5 Thou hypocrite, first cast out the
      beam out of thine own eye; and then shalt thou see clearly to cast out the
      mote out of thy brother's eye. 6 Give not that which is holy unto the
      dogs, neither cast ye your pearls before swine, lest they trample them
      under their feet, and turn again and rend you.
    </div>
  );
}

function Ask() {
  return (
    <div>
      Ask, and it shall be given you; seek, and ye shall find; knock, and it
      shall be opened unto you: 8 For every one that asketh receiveth; and he
      that seeketh findeth; and to him that knocketh it shall be opened. 9 Or
      what man is there of you, whom if his son ask bread, will he give him a
      stone? 10 Or if he ask a fish, will he give him a serpent? 11 If ye then,
      being evil, know how to give good gifts unto your children, how much more
      shall your Father which is in heaven give good things to them that ask
      him? 12 Therefore all things whatsoever ye would that men should do to
      you, do ye even so to them: for this is the law and the prophets.
    </div>
  );
}

function TheNarrowWay() {
  return (
    <div>
      Enter ye in at the strait gate: for wide is the gate, and broad is the
      way, that leadeth to destruction, and many there be which go in thereat:
      14 Because strait is the gate, and narrow is the way, which leadeth unto
      life, and few there be that find it.
    </div>
  );
}

function BewareFalseProphets() {
  return (
    <div>
      Beware of false prophets, which come to you in sheep's clothing, but
      inwardly they are ravening wolves. 16 Ye shall know them by their fruits.
      Do men gather grapes of thorns, or figs of thistles? 17 Even so every good
      tree bringeth forth good fruit; but a corrupt tree bringeth forth evil
      fruit. 18 A good tree cannot bring forth evil fruit, neither can a corrupt
      tree bring forth good fruit. 19 Every tree that bringeth not forth good
      fruit is hewn down, and cast into the fire. 20 Wherefore by their fruits
      ye shall know them.
    </div>
  );
}

function TheFalselyFaithful() {
  return (
    <div>
      Not every one that saith unto me, Lord, Lord, shall enter into the kingdom
      of heaven; but he that doeth the will of my Father which is in heaven. 22
      Many will say to me in that day, Lord, Lord, have we not prophesied in thy
      name? and in thy name have cast out devils? and in thy name done many
      wonderful works? 23 And then will I profess unto them, I never knew you:
      depart from me, ye that work iniquity.
    </div>
  );
}

function BuildAHouseOnTheRock() {
  return (
    <div>
      Therefore whosoever heareth these sayings of mine, and doeth them, I will
      liken him unto a wise man, which built his house upon a rock: 25 And the
      rain descended, and the floods came, and the winds blew, and beat upon
      that house; and it fell not: for it was founded upon a rock. 26 And every
      one that heareth these sayings of mine, and doeth them not, shall be
      likened unto a foolish man, which built his house upon the sand: 27 And
      the rain descended, and the floods came, and the winds blew, and beat upon
      that house; and it fell: and great was the fall of it.
    </div>
  );
}
function Conclusion() {
  return (
    <div>
      And it came to pass, when Jesus had ended these sayings, the people were
      astonished at his doctrine: 29 For he taught them as one having authority,
      and not as the scribes.
    </div>
  );
}
