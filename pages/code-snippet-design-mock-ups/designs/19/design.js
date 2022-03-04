import styles from './Styles.module.css'

export default function Design() {
  return (
    <>
      <pre className={styles.background}>
        <div className={styles.row}>
          <span
            className={`rounded-tl-md ${styles.line_number} ${styles.first_line}`}
          >
            1
          </span>
          <span className={`rounded-tr-md ${styles.line_content}`}>
            <span className="token keyword">function</span>
            <span className="token plain"> </span>
            <span className="token function">get_random_number</span>
            <span className="token punctuation">(</span>
            <span className="token parameter">max_number</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token punctuation">{'{'}</span>
            <span className="token plain"></span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>2</span>
          <span className={styles.line_content}>
            <span className="token plain">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="token keyword">return</span>
            <span className="token plain"> Math</span>
            <span className="token punctuation">.</span>
            <span className="token function">floor</span>
            <span className="token punctuation">(</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>3</span>
          <span className={styles.line_content}>
            <span className="token plain">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="token punctuation">(</span>
            <span className="token plain">Math</span>
            <span className="token punctuation">.</span>
            <span className="token function">random</span>
            <span className="token punctuation">(</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token operator">*</span>
            <span className="token plain"> max_number</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token operator">+</span>
            <span className="token plain"> </span>
            <span className="token number">1</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>4</span>
          <span className={styles.line_content}>
            <span className="token plain">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="token punctuation">)</span>
          </span>
        </div>

        <div className={styles.row}>
          <span
            className={`rounded-bl-md ${styles.line_number} ${styles.last_line}`}
          >
            5
          </span>
          <span className={styles.line_content}>
            <span className="token plain"></span>
            <span className="token punctuation">{'}'}</span>
          </span>
        </div>

        <button className={`rounded-tr-md ${styles.copy_button}`}>Copy</button>
      </pre>

      <div className="text-xs">&nbsp;</div>

      <pre
        className={`rounded-tl-md rounded-tr-md ${styles.background_console}`}
      >
        <div className={styles.row_console}>
          <span
            className={`rounded-tl-md pt-1 pb-1 ${styles.line_number_console}`}
          >
            &nbsp;
          </span>
          <span className={`rounded-tr-md ${styles.line_content_console} `}>
            <span className="token plain">console</span>
            <span className="token punctuation">.</span>
            <span className="token function">log</span>
            <span className="token punctuation">(</span>
            <span className="token function">get_random_number</span>
            <span className="token punctuation">(</span>
            <span className="token number">100</span>
            <span className="token punctuation">)</span>
            <span className="token punctuation">)</span>
          </span>
        </div>
      </pre>

      <pre
        className={`rounded-bl-md rounded-br-md ${styles.background_output}`}
      >
        <div
          className={`rounded-bl-md rounded-br-md ${styles.row} ${styles.row_output}`}
        >
          <span className={`rounded-bl-md pt-1 pb-1 ${styles.line_number}`}>
            &nbsp;
          </span>
          <span className={styles.line_content}>27</span>
        </div>
      </pre>

      <ul className="mt-8">
        <li>TKTKTKT</li>
      </ul>
    </>
  )
}
