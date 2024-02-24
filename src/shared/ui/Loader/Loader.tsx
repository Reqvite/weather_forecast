import './styles.css'

type Props = {
  isOverflow?: boolean;
};

export const Loader = ({ isOverflow }: Props) =>
    isOverflow ? (
        <div className="overflowLoader">
            <div data-test-id="loader" className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    ) : (
        <div data-test-id="loader" className="lds-ellipsis centered">
            <div />
            <div />
            <div />
            <div />
        </div>
    );

